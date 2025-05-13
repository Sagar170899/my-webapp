pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('OWASP ZAP Scan') {
      steps {
        sh 'zap-cli quick-scan --start-options "-config api.disablekey=true" http://localhost:3000'
      }
    }
  }
}