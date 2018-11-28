# Serverless Charge Backend (AWS Lambda & API Gateway) Quick Start

## Assumptions and prerequisites
_____
This quick start guide makes the following assumptions:
- You are familiar with using AWS Lambda & AWS API Gateway, and have an [active AWS account](https://aws.amazon.com/).
- You have a Square account enabled for payment processing. If you have not enabled payment processing on your account (or you are not sure), visit [squareup.com/activate](squareup.com/activate).
- You are familiar with basic NodeJS development.

## Before you start
Clone this repo (if you have not already): [https://github.com/mootrichard/serverless-backend-quick-start](https://github.com/mootrichard/serverless-backend-quick-start)

## Step 1: Run Installation Script
Run `npm install` in the same directory where you cloned this repo.

## Step 2: Run `zipFiles` Script for Packaging Function
Run `npm run zipFiles` in the same directory where you cloned this repo.

## Step 3: Create function on AWS and Upload `chargeForCookies.zip` to Your Lamdba Function
If you haven't already created a function in AWS, you'll want to navigate to the Lambda section of your AWS account. (https://console.aws.amazon.com/lambda/home)

You'll find a create function button in the top right that will allow you to create a new Lambda function. You'll be prompted through a wizard for configuring your function. The only required configuration for this quick start is using `Node.js 8.10`. You must also select an appropriate IAM profile to associate with your function.

After completing the wizard, you'll have another editor that you can edit the function in. You'll want to select the drop-down titled "Code entry type" and select "Upload a .zip file". Click the "Upload" button that appears and upload the `chargeForCookies.zip` file. Click "Save" found at the top-right. You should now see your function in the AWS editor as it appears in your local editor.