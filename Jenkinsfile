pipeline {
  agent any

  environment {
    // Variabili di BrowserStack (recuperate da Jenkins credentials)
    BROWSERSTACK_USERNAME = credentials('browserstack-username')
    BROWSERSTACK_ACCESS_KEY = credentials('browserstack-access-key')
  }

  stages {

    stage('Checkout') {
      steps {
        echo 'Clonazione del repository...'
        checkout scm
      }
    }

    stage('Install Node') {
      tools {
        nodejs 'node25'  // 🔹 Nome configurato in Jenkins → Manage Jenkins → Tools → NodeJS
      }
      steps {
        sh 'node -v'
        sh 'npm -v'
      }
    }

    stage('Install dependencies') {
      steps {
        dir('config') {
          echo 'Installazione dipendenze...'
          sh 'npm ci || npm install'
        }
      }
    }

    stage('Run tests on BrowserStack') {
      steps {
        dir('config') {
          echo 'Esecuzione test WebdriverIO su BrowserStack...'
          sh 'npx wdio run ./wdio.conf.ts'
        }
      }
    }
  }

  post {
    always {
      echo 'Pipeline terminata.'
    }
    failure {
      echo '❌ Build fallita.'
    }
    success {
      echo '✅ Tutti i test sono passati con successo!'
    }
  }
}
