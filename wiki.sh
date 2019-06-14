imageTag: "latest143"
env:
    DISCOVERY_INGRESS: "qloudkernel.service.sd"
    DISCOVERY_CLUSTER: "qloudkernel.default"
    SERVICE_INGRESS: "qloudwiki4d.service.sd"
    SERVICE_NAME: "qloudwiki4d"
    SERVER_OPTS: "-Xms512M -Xmx8192M"
    DISCOVERY_SSL: "true"
ingressAddns: false
serviceName: qloudwiki
ingressHosts:
- host: qloudwiki4d
  domain: service.sd
  paths:
  - path:
    servicePort: 80
ingressTls:
- secretName: qloudwiki.service.sd
  hosts:
  - host: qloudwiki4d
    domain: service.sd

# init config
imageTag: "latest70"
env:
  DISCOVERY_INGRESS: "qloudkernel.service.sd"
  DISCOVERY_CLUSTER: "qloudkernel.default"
  SERVICE_INGRESS: "qloudwiki4d.service.sd"
  SERVICE_NAME: "qloudwiki4d"
  SERVER_OPTS: "-Xms512M -Xmx8192M"
  QMSAUTHN_SERVICE_NAME: "qmsauthn4d"
  QMSAUTHZ_SERVICE_NAME: "qmsauthz.pditdop"
  QLOUDDOP_SERVICE_NAME: "qlouddop4d"
  MONGODB_SERVICE_NAME:  "mongodb.pditdapps"
  DATABASE_USERNAME: "root"
  DATABASE_PASSWORD: "QloudMongoDB2019"
  GIT_USERNAME: "catzillagcst"
  GIT_PASSWORD: "********"

