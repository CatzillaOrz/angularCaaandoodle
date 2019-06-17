#!/bin/bash

Red='\033[0;31m'
Green='\033[0;32m'
Colorless='\033[0m'

TIMEOUT_SECONDS=1
KERNEL_SCHEMA=$1
KERNEL_HOST=$2
KERNEL_PORT=$3

echo -e "[DEPLOY.APP]KERNEL_SCHEMA:"$KERNEL_SCHEMA
echo -e "[DEPLOY.APP]KERNEL_HOST:"$KERNEL_HOST
echo -e "[DEPLOY.APP]KERNEL_PORT:"$KERNEL_PORT

KERNEL_SERVICE_PREFIX=$KERNEL_SCHEMA://$KERNEL_HOST:$KERNEL_PORT

export INSTALL_HOME=$(cd `dirname $0`; pwd)
export CONF_FILE=${INSTALL_HOME}"/qmsauthn.properties"

echo -e "$KERNEL_SERVICE_PREFIX"

function json_result(){
 host=$1
 port=$2
 echo "{\"host\":\""${host}"\",\"port\":"${port}"}"
}

function service_discovery() {
    service_name=$1
    service_type=$2
    SERVICE_CHECK_CMD="tcp"
    SERVICE_DISCOVERY_RESULT=$(curl -s -m ${TIMEOUT_SECONDS} --connect-timeout ${TIMEOUT_SECONDS} -X GET ${KERNEL_SERVICE_PREFIX}/discovery/services/${service_name})

    if [ "$SERVICE_DISCOVERY_RESULT" = "" ]
    then
      exit 1;
    else
      SERVICE_DISCOVERY_SERVICE_META=$(echo $SERVICE_DISCOVERY_RESULT | jq -r '.[0].ServiceMeta')

      if [ "$SERVICE_DISCOVERY_SERVICE_META" = "null" ]
      then
            SERVICE_CLUSTER_HOST=$(echo $SERVICE_DISCOVERY_RESULT | jq -r '.[0].ServiceAddress') # cluster
            SERVICE_CLUSTER_PORT=$(echo $SERVICE_DISCOVERY_RESULT | jq -r '.[0].ServicePort')   # cluster
      else
            # ServiceMeta is not null, extract attrs
            SERVICE_CLUSTER_HOST=$(echo $SERVICE_DISCOVERY_SERVICE_META | jq -r '.LocalHost') # cluster
            SERVICE_CLUSTER_PORT=$(echo $SERVICE_DISCOVERY_SERVICE_META | jq -r '.LocalPort') # cluster
            SERVICE_INGRESS_HOST=$(echo $SERVICE_DISCOVERY_RESULT | jq -r '.[0].ServiceAddress') # ingress
            SERVICE_INGRESS_PORT=$(echo $SERVICE_DISCOVERY_RESULT | jq -r '.[0].ServicePort')    # ingress

            # special
            if [ $service_type = "logstash" ]
            then
                # logstash tcp input support
                SERVICE_CLUSTER_PORT=$(echo $SERVICE_DISCOVERY_SERVICE_META | jq -r '.TcpPort') # cluster
            fi
      fi


      # check type
      if [ $service_type = "statsd" ]
      then
          SERVICE_CHECK_CMD="udp"
      fi

      # check
      timeout 3 bash -c '</dev/$SERVICE_CHECK_CMD/$SERVICE_CLUSTER_HOST/$SERVICE_CLUSTER_PORT'; SERVICE_CLUSTER_VALID=$?

      if [ "$SERVICE_CLUSTER_VALID" = "0" ]
      then
          RESULT=$(json_result $SERVICE_CLUSTER_HOST $SERVICE_CLUSTER_PORT)
          echo $RESULT
      else
          timeout 3 bash -c '</dev/$SERVICE_CHECK_CMD/$SERVICE_INGRESS_HOST/$SERVICE_INGRESS_PORT'; SERVICE_INGRESS_VALID=$?
          if [ "$SERVICE_INGRESS_VALID" = "0" ]
          then
              RESULT=$(json_result $SERVICE_INGRESS_HOST $SERVICE_INGRESS_PORT)
              echo $RESULT
          else
              exit 1;
          fi
      fi

    fi
}

# qmsauthn dependencies
echo -e "mariadb, redis, postfix, statsd, logstash"

MARIADB_SERVICE_NAME="${MARIADB_SERVICE_NAME:-mariadb}"
REDIS_SERVICE_NAME="${REDIS_SERVICE_NAME:-redis}"
POSTFIX_SERVICE_NAME="${POSTFIX_SERVICE_NAME:-postfix}"
STATSD_SERVICE_NAME="${STATSD_SERVICE_NAME:-statsd}"
LOGSTASH_SERVICE_NAME="${LOGSTASH_SERVICE_NAME:-logstash}"

########
#
# mariadb
#
########

MARIADB=$(service_discovery ${MARIADB_SERVICE_NAME})

echo "MARIADB Service Name: "${MARIADB_SERVICE_NAME}", Service Registration: "$MARIADB
MARIADB_HOST=$(echo $MARIADB| jq -r '.host')
MARIADB_PORT=$(echo $MARIADB| jq -r '.port')

sed -i 's#qloudmariadb:3306#'${MARIADB_HOST:=qloudmariadb}':'${MARIADB_PORT:=3306}'#' $CONF_FILE

########
#
# redis
#
########
REDIS=$(service_discovery ${REDIS_SERVICE_NAME})

echo "REDIS Service Name: "$REDIS_SERVICE_NAME", Service Registration: "$REDIS
REDIS_HOST=$(echo $REDIS| jq -r '.host')
REDIS_PORT=$(echo $REDIS| jq -r '.port')

sed -i 's#spring.redis.host=qloudredis#spring.redis.host='${REDIS_HOST:=qloudredis}'#' $CONF_FILE
sed -i 's#spring.redis.port=6379#spring.redis.port='${REDIS_PORT:=6379}'#' $CONF_FILE
sed -i 's#cas.ticket.registry.redis.host=qloudredis#cas.ticket.registry.redis.host='${REDIS_HOST:=qloudredis}'#' $CONF_FILE
sed -i 's#cas.ticket.registry.redis.port=6379#cas.ticket.registry.redis.port='${REDIS_PORT:=6379}'#' $CONF_FILE


########
#
# postfix
#
########
POSTFIX=$(service_discovery ${POSTFIX_SERVICE_NAME})

echo "POSTFIX Service Name: "$POSTFIX_SERVICE_NAME", Service Registration: "$POSTFIX
POSTFIX_HOST=$(echo $POSTFIX| jq -r '.host')
POSTFIX_PORT=$(echo $POSTFIX| jq -r '.port')

sed -i 's#spring.mail.host=qloudpostfix#spring.mail.host='${POSTFIX_HOST:=qloudpostfix}'#' $CONF_FILE
sed -i 's#spring.mail.port=25#spring.mail.port='${POSTFIX_PORT:=25}'#' $CONF_FILE

#spring.mail.username=user
#spring.mail.password=pwd

########
#
# statsd
#
########
STATSD=$(service_discovery ${STATSD_SERVICE_NAME} "statsd")

echo "STATSD Service Name: "$STATSD_SERVICE_NAME", Service Registration: "$STATSD
STATSD_HOST=$(echo $STATSD| jq -r '.host')
STATSD_PORT=$(echo $STATSD| jq -r '.port')

sed -i 's#management.metrics.export.statsd.host=qloudstatsd#management.metrics.export.statsd.host='${STATSD_HOST:=qloudstatsd}'#' $CONF_FILE
sed -i 's#management.metrics.export.statsd.port=8125#management.metrics.export.statsd.port='${STATSD_PORT:=8125}'#' $CONF_FILE

########
#
# service ingress
#
########

sed -i 's#https://qmsauthn.service.sd#https://'${SERVICE_INGRESS:=qmsauthn.service.sd}'#' $CONF_FILE

########
#
# logstash custom
#
########

LOGSTASH=$(service_discovery ${LOGSTASH_SERVICE_NAME} "logstash")

echo "LOGSTASH Service Name: "$LOGSTASH_SERVICE_NAME", Service Registration: "$LOGSTASH
LOGSTASH_HOST=$(echo $LOGSTASH| jq -r '.host')
LOGSTASH_PORT=$(echo $LOGSTASH| jq -r '.port')

cat << EOT >> $CONF_FILE

cas.custom.properties.qloud.logstash.host=${LOGSTASH_HOST:=qloudlogstash}
cas.custom.properties.qloud.logstash.port=${LOGSTASH_PORT:=5055}

EOT

cat $CONF_FILE

########
#
# configuration register
#
########
echo "Register Configuration..."
./deploy-reg.sh $KERNEL_SCHEMA $KERNEL_HOST $KERNEL_PORT $CONF_FILE
