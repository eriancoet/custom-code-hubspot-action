# custom-code-hubspot-action

## deploy your custom code action, you need to set up a webhook endpoint or a serverless function (e.g., using AWS Lambda, Google Cloud Functions, or Azure Functions) that HubSpot can call when the action is triggered. Here’s an example using AWS Lambda:

## Create a Lambda Function: Follow AWS Lambda documentation to create a new Lambda function.
## Upload the Code: Zip your project files (including node_modules) and upload them to the Lambda function.
## Set Environment Variables: In the Lambda function configuration, set the environment variable SECRET_NAME to your HubSpot private app access token.
## Set the Function Handler: Ensure the handler is set to index.main.
### Configure HubSpot Workflow
### Create a Custom Workflow Action: In your HubSpot account, navigate to Automation > Workflows and create a custom action.
### Add the Action to a Workflow: Add the custom action to a workflow and configure it to trigger your Lambda function or webhook endpoint.
