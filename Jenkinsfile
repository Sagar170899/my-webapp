pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Application') {
            steps {
                bat 'start /B npm start'
                sleep(time: 5, unit: 'SECONDS')
            }
        }

        stage('OWASP ZAP Scan') {
            steps {
                bat 'zap.bat -cmd -quickurl http://localhost:3000 -quickout zap_report.html'
                archiveArtifacts artifacts: 'zap_report.html'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '*.html', allowEmptyArchive: true
            cleanWs()
        }
    }
}
