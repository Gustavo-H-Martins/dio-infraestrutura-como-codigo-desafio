"use strict"

const {v4} = require("uuid");
const AWS = require("aws-sdk");

const inserObjeto = async ( event) => {
    
    const {objeto} = JSON.parse(event.body);
    const createdAt = new Date().toISOString();
    const id = v4()

    const dynamoDB = new AWS.DynamoDB.DocumentClient();

    const newObjeto = {
        id, 
        objeto,
        createdAt,
        itemStatus: false
    }

    await dynamoDB.put(
        {
            TableName: "ItemTableNew",
            Item: newObjeto
        }
    );

    return {
        statusCode: 200,
        body: JSON.stringify(newObjeto)
    };
}

module.exports = {
    handler: inserObjeto
}