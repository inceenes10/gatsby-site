
const awsconfig =  {
    "aws_appsync_graphqlEndpoint": process.env.APPSYNC_API_URL,
    "aws_appsync_region": process.env.APPSYNC_REGION,
    "aws_appsync_authenticationType": process.env.APPSYNC_AUTHENTICATION_TYPE,
    "aws_appsync_apiKey": process.env.APPSYNC_API_KEY,
    "aws_project_region": "eu-central-1",
    "aws_cognito_identity_pool_id": "eu-central-1:7d340b75-8e7a-4b72-bc50-aa261309ac0c",
    "aws_cognito_region": "eu-central-1",
    "aws_user_pools_id": "eu-central-1_wAvt783OW",
    "aws_user_pools_web_client_id": "15eeop6tsd5a88jvjs5663l69h",
    "oauth": {},
}


export default awsconfig;
