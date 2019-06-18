@Library('qloudqa-pipeline-lib@master') import org.com.DitSteps

node {
    currentBuild.result = "SUCCESS"
    def mvnHome = tool 'maven_3_5_4'

    name_list = "$JOB_NAME".split('/') //eg : 'qloudservice-qloudapi/master' --> ['qloudservice-qloudapi', 'master']
    def ver = name_list[1]           //eg : 'master'
    def job = name_list[0]           //eg : 'qloudservice-qloudapi'
    job_list = "$job".split('-')      //eg : 'qloudservice-qloudapi' --> ['qloudservice', 'qloudapi']
    def project = job_list[0]            //eg : 'qloudservice'
    job_size = job_list.size() - 1
    img_list = []
    for (x in (1..job_size)) {
        img_list.add(job_list[x])
    }
    def img = img_list.join('-')

    def ver_map = ["master": "latest"]
    if (ver_map.containsKey(ver)) {
        ver = ver_map.get(ver) + "$BUILD_NUMBER"
    }else{
        ver = ver + "$BUILD_NUMBER"
    }
    
    def tag = "reg.qloudhub.com/'${project}'/'${img}':'${ver}'"

    def script_dir = project + '/' + img + '/' + ver
    def slug_dir = "/tmp/'${script_dir}'"
    def slug_file = "'${slug_dir}'/slug.tgz"

    acme.setJobName("$JOB_NAME")
    acme.init(BUILD_NUMBER)
    def dit = new org.com.DitSteps(steps)


    try {
        stage('Check out') {
            checkout scm
        }
        //  sonar 代码质量检查
        // stage('SonarQube analysis') {
        //     sh("echo '# must be unique in a given SonarQube instance' > sonar-project.properties")
        //     sh("echo sonar.projectKey=${job} >> sonar-project.properties")
        //     sh("echo sonar.projectName=${job} >> sonar-project.properties")
        //     sh("echo sonar.projectVersion=${ver} >> sonar-project.properties")
        //     sh("echo sonar.sources=. >> sonar-project.properties")
        //     sh("echo sonar.java.binaries=. >> sonar-project.properties")
        //     sh("echo sonar.exclusions=**/test/**,**/target/** >> sonar-project.properties")
        //     sh("echo sonar.java.source=11 >> sonar-project.properties")
        //     sh("echo sonar.java.target=11 >> sonar-project.properties")
        //     sh("echo sonar.sourceEncoding=UTF-8 >> sonar-project.properties")
        //     def sonarqubeScannerHome = tool name: 'SonarQube'
        //     withSonarQubeEnv('SonarQube') {
        //         sh "${sonarqubeScannerHome}/bin/sonar-scanner"
        //     }
        // }
        // maven 代码构建
        stage('Build') {

            def javaHome  = tool 'JDK-11'
            def gradleHome= tool 'gradle_5_1'
            withEnv(["PATH+JAVA=${ javaHome }/bin"]) {
                withEnv(["PATH+GRADLE=${ gradleHome }/bin"]) {

                    // sh("java -version")
                    // sh("gradle -v")

                    // build audit
                    dir("cas-6.1.0-RC2/core/cas-server-core-audit") {
                        sh "gradle clean build -DskipFindbugs=true -Dorg.gradle.internal.http.socketTimeout=600000 -Dorg.gradle.internal.http.connectionTimeout=600000"
                        sh "cp build/libs/cas-server-core-audit-6.1.0-RC2-qmsauthn.jar ../../../etc/cas/WEB-INF/lib/"
                    }

                    // build pm
                    dir("cas-6.1.0-RC2/support/cas-server-support-pm-webflow") {
                        sh "gradle clean build -DskipFindbugs=true -Dorg.gradle.internal.http.socketTimeout=600000 -Dorg.gradle.internal.http.connectionTimeout=600000"
                        sh "cp build/libs/cas-server-support-pm-webflow-6.1.0-RC2-qmsauthn.jar ../../../etc/cas/WEB-INF/lib/"
                    }

                    // build rest service
                    dir("cas-6.1.0-RC2/support/cas-server-support-rest-services") {
                        sh "gradle clean build -DskipFindbugs=true -Dorg.gradle.internal.http.socketTimeout=600000 -Dorg.gradle.internal.http.connectionTimeout=600000"
                        sh "cp build/libs/cas-server-support-rest-services-6.1.0-RC2-qmsauthn.jar ../../../etc/cas/WEB-INF/lib/"
                    }

                    // build qmsauthn
                    sh 'gradle clean build -Dorg.gradle.internal.http.socketTimeout=600000 -Dorg.gradle.internal.http.connectionTimeout=600000'
                }
            }

        }

        // docker 镜像构建 push
        stage('Docker build') {
            sh("touch slug.tgz")
            sh("docker build -t ${tag} .")
            sh("docker push ${tag}")
        }

        // chart 配置推送
        dit.pushChart(acme)

        stage('Cleanup') {
            sh("docker rmi ${tag}")
            sh("rm -f ${slug_file}")
            sh "rm -rf *"
            sh "rm -rf .git"
        }
    } catch (err) {
        currentBuild.result = "FAILURE"
        throw err
    }
}
