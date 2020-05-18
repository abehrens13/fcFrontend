pipeline {
	agent any
    options {
    	timeout(time: 15, unit: 'MINUTES')
    	disableConcurrentBuilds()
    }

	environment {
    	DOCKERID = "feb18"
    	IMAGE = 'fcfrontend'
    	VERSION = '0.0.2-SNAPSHOT'
  	}

	stages {
		/**=======================*/
		stage('Show Tool Versions'){
			steps{
				echo 'npm --version'
				sh 'npm --version'
				echo 'docker --version'
				sh 'docker --version'
				echo "PATH = ${PATH}"
			}
		}


		/**=======================*/
		//https://igorski.co/sonarqube-scans-using-jenkins-declarative-pipelines/
		stage('SonarCloud') {
  			environment {
    			SCANNER_HOME = tool 'MySonarQubeScanner'
			}
  			steps {
    			withSonarQubeEnv('Sonar') {
        			sh '''$SCANNER_HOME/bin/sonar-scanner -Dsonar.java.binaries=target/classes -Dsonar.projectKey=${IMAGE} -Dsonar.sources=.'''
    			}
  			}
		}

	}
}
