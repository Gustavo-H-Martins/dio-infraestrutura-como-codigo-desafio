"use strict"

const AWS = require("aws-sdk");

const fetchObjects = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    let objects;

    try{
        const results = await dynamodb.scan({
            TableName: "ItemTableNew"
        }).promise();
        
        objects = results.Items
    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(Items),
    };
}

module.exports = {
    handler: fetchObjects,
}