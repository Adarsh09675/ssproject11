pipeline {
  agent any

  // allow manual forcing of build/deploy
  parameters {
    booleanParam(name: 'FORCE_DEPLOY', defaultValue: false, description: 'Rebuild & redeploy even if changeset did not detect changes')
  }

  environment {
    APP_SERVER   = '54.79.163.212'
    REMOTE_USER  = 'ubuntu'
    REMOTE_DIR   = '/var/www/myapp'
    SSH_CRED_ID  = 'deploy-ssh-key'   // set this credential in Jenkins (see steps below)
    NODEJS_VER   = 'node20'           // name of NodeJS tool in Jenkins global config
  }

  tools {
    nodejs "${NODEJS_VER}"
  }

  stages {
    stage('Checkout Code') {
      steps {
        echo "🔁 Checking out code..."
        git branch: 'master', url: 'https://github.com/Adarsh09675/ssproject11.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        nodejs(NODEJS_VER) {
          sh '''
            if [ -d node_modules ]; then
              echo "✅ Using cached node_modules"
            else
              echo "📦 Installing dependencies..."
              npm ci
            fi
          '''
        }
      }
    }

    stage('Build React App') {
      when {
        anyOf {
          changeset "**/*.{js,jsx,ts,tsx,css,scss,json,html}"
          expression { return params.FORCE_DEPLOY }
        }
      }
      steps {
        nodejs(NODEJS_VER) {
          sh '''
            echo "🏗️ Building React app..."
            npm run build

            # create a tiny build-info file so we can verify deployment
            GIT_COMMIT=$(git rev-parse --short HEAD || echo "unknown")
            echo "commit: ${GIT_COMMIT}" > build/build-info.txt
            echo "build_number: ${BUILD_NUMBER}" >> build/build-info.txt
            echo "deployed_at: $(date -u +"%Y-%m-%dT%H:%M:%SZ")" >> build/build-info.txt
            echo "✅ build-info created at build/build-info.txt"
          '''
        }
      }
    }

    stage('Deploy to EC2') {
      when {
        anyOf {
          expression { return params.FORCE_DEPLOY }
          expression { return fileExists('build') }
        }
      }
      steps {
        // uses Jenkins SSH credential (SSH_CRED_ID) to push files
        sshagent (credentials: [SSH_CRED_ID]) {
          sh """
            echo "🚀 Deploying build/ to ${REMOTE_USER}@${APP_SERVER}:${REMOTE_DIR} ..."
            ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${APP_SERVER} 'mkdir -p ${REMOTE_DIR}'
            rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no" build/ ${REMOTE_USER}@${APP_SERVER}:${REMOTE_DIR}
            # move files to the web root (requires sudo on target)
            ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${APP_SERVER} 'sudo rsync -avz --delete ${REMOTE_DIR}/ /var/www/html/'
            ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${APP_SERVER} 'sudo systemctl restart nginx || true'
            echo "✅ Deploy finished."
          """
        }
      }
    }
  }

  post {
    success {
      echo "✅ Deployment successful!"
    }
    failure {
      echo "❌ Deployment failed!"
    }
  }
}

