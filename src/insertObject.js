"use strict"

const {v4} = require("uuid");
const AWS = require("aws-sdk");

const insertObject = async ( event) => {
    
    const {objeto} = JSON.parse(event.body);
    const createdAt = new Date().toISOString();
    const id = v4()

    const dynamoDB = new AWS.DynamoDB.DocumentClient();

    const newObject = {
        id, 
        objeto,
        createdAt,
        itemStatus: false
    }

    await dynamoDB.put(
        {
            TableName: "ItemTableNew",
            Item: newObject
        }
    );

    return {
        statusCode: 200,
        body: JSON.stringify(newObject)
    };
}

module.exports = {
    handler: insertObject
}