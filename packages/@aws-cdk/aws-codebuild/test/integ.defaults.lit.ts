import cdk = require('@aws-cdk/cdk');
import codebuild = require('../lib');

class TestStack extends cdk.Stack {
  constructor(parent: cdk.App, id: string) {
    super(parent, id);

    /// !show
    new codebuild.Project(this, 'MyProject', {
      buildSpec: {
        version: '0.2',
        phases: {
          build: {
            commands: [
              'echo "Hello, CodeBuild!"'
            ]
          }
        }
      }
    });
    /// !hide
  }
}

const app = new cdk.App();

new TestStack(app, 'codebuild-default-project');

app.run();
