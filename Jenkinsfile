pipeline {
    agent any

    environment {
        DEPLOY_SERVER = "ubuntu@3.27.122.160"
        APP_PATH = "/var/www/shiwansh_app"
        NPM_CACHE = "${WORKSPACE}/.npm_cache"
        NODE_ENV = "production"
    }

    options {
        skipDefaultCheckout(true)
        timestamps()
    }

    stages {
        stage('Checkout') {
            steps {
                echo "🔄 Checking out code from GitHub"
                git branch: 'master',
                    url: 'git@github.com:Adarsh09675/ssproject11.git',
                    credentialsId: 'github-ssh-key'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "📦 Installing dependencies efficiently"
                sh '''
                    mkdir -p "$NPM_CACHE"
                    npm ci --cache "$NPM_CACHE" --prefer-offline --jobs=$(nproc) --silent
                '''
            }
        }

        stage('Build React App') {
            steps {
                echo "⚡ Building React app"
                sh '''
                    # Ignore ESLint warnings that break CI
                    CI=false npm run build
                '''
                script {
                    if (!fileExists("build/index.html")) {
                        error "❌ Build failed! build/index.html not found."
                    }
                }
            }
        }

        stage('Deploy to Server') {
            steps {
                echo "🚀 Deploying to $DEPLOY_SERVER"
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
