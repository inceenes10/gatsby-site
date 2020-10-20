const awsconfig =  {
    "aws_appsync_graphqlEndpoint": process.env.APPSYNC_API_URL,
    "aws_appsync_region": process.env.APPSYNC_REGION,
    "aws_appsync_authenticationType": process.env.APPSYNC_AUTHENTICATION_TYPE,
    "aws_appsync_apiKey": process.env.APPSYNC_API_KEY,
};

export default awsconfig;