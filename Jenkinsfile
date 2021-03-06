node {
    try {
        notifyBuild('STARTED')

        stage('checkout') {
            sh "echo checkout"
            checkout scm
        }

        stage('backend:test') {
            sh "echo backend:test"

            dir('backend') {
                ansiColor('xterm') {
                    sh "docker-compose -f docker-compose.test.yml up --renew-anon-volumes --force-recreate --abort-on-container-exit --exit-code-from test"
                }
            }
        }

        stage('backend:build') {
            sh "echo backend:build"

            dir('backend') {
                ansiColor('xterm') {
                    sh "docker build . -t le-killer/backend:${ENVIRONMENT}"
                }
            }
        }

        stage('frontend:test') {
            sh "echo frontend:test"

            dir('frontend') {
                ansiColor('xterm') {
                    sh "docker-compose -f docker-compose.test.yml up --renew-anon-volumes --force-recreate --abort-on-container-exit --exit-code-from test"
                }
            }
        }

        stage('frontend:build') {
            sh "echo frontend:build"

            dir('frontend') {
                ansiColor('xterm') {
                    sh "docker build . -t le-killer/frontend:${ENVIRONMENT}"
                }
            }
        }

        notifyBuild('SUCCESS')
    } catch (error) {
        notifyBuild('FAILURE')
        throw error
    }
}

def notifyBuild(String buildStatus) {
    def subject = "${buildStatus}: ${env.JOB_NAME}#${env.BUILD_NUMBER}"
    def summary = "${subject} (${env.BUILD_URL})"

    if (buildStatus == 'STARTED') {
        color = 'YELLOW'
        colorCode = '#FFFF00'
    } else if (buildStatus == 'SUCCESS') {
        color = 'GREEN'
        colorCode = '#00FF00'
    } else {
        color = 'RED'
        colorCode = '#FF0000'
    }

    // Send notifications
    //slackSend(color: colorCode, message: summary)
}
