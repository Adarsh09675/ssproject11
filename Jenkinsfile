pipeline {
    agent any

    environment {
        DEPLOY_SERVER = "ubuntu@3.27.122.160"
        APP_PATH = "/var/www/shiwansh_app"
        NPM_CACHE = "${WORKSPACE}/.npm_cache"   // safer interpolation
    }

    options {
        skipDefaultCheckout(true)
        timestamps()
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/Adarsh09675/ssproject11.git',
                    credentialsId: 'github-ssh-key'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "📦 Installing dependencies efficiently"
                sh '''
                    mkdir -p "$NPM_CACHE"
                    npm ci --cache "$NPM_CACHE" --prefer-offline --jobs=$(nproc) --silent --no-progress
                '''
            }
        }

        stage('Build React App') {
            steps {
                echo "⚡ Building React app"
                sh 'npm run build'
                script {
                    if (!fileExists("build/index.html")) {
                        error "❌ Build failed! build/index.html not found."
                    }
                }
            }
        }

        stage('Deploy to Server') {
            steps {
                sshagent(['Ecom-credential']) {
                    sh '''
                        rsync -az --delete build/ $DEPLOY_SERVER:$APP_PATH
                        ssh $DEPLOY_SERVER "sudo systemctl restart nginx"
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "✅ Deployment Successful!"
        }
        failure {
            echo "❌ Deployment Failed!"
        }
    }
}
