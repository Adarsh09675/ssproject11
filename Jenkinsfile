pipeline {
    agent any
    environment {
        APP_SERVER   = '54.252.238.241'
        REMOTE_USER  = 'ubuntu'
        REMOTE_DIR   = '/var/www/myapp'
        SSH_CRED_ID  = 'deploy-ssh-key'
        NODEJS_VER   = 'node20'
    }

    stages {
        stage('Checkout Code') {
            steps {
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
                            npm install
                        fi
                    '''
                }
            }
        }

        stage('Build React App') {
            when {
                changeset "**/*.{js,jsx,ts,tsx,css,scss,json,html}"
            }
            steps {
                nodejs(NODEJS_VER) {
                    sh '''
                        echo "🏗️ Building React app..."
                        npm run build
                    '''
                }
            }
        }

        stage('Deploy to EC2') {
            when {
                changeset "build/**"
            }
            steps {
                sshagent (credentials: [SSH_CRED_ID]) {
                    sh """
                        echo "🚀 Deploying changed files to EC2..."
                        ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${APP_SERVER} 'mkdir -p ${REMOTE_DIR}'
                        rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no" build/ ${REMOTE_USER}@${APP_SERVER}:${REMOTE_DIR}
                        ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${APP_SERVER} 'sudo rsync -avz --delete ${REMOTE_DIR}/ /var/www/html/'
                        ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${APP_SERVER} 'sudo systemctl restart nginx'
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

