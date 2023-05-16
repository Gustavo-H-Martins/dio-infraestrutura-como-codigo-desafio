"use strict"

const AWS = require("aws-sdk");


const fetchobject = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const {id} = event.pathParameters

    let objeto;

    try {
        const result = await dynamodb.get({
            TableName:"ItemTableNew",
            Key: {id}
        }).promise();

        objeto = result.Item;

    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(Item),
    };
}

module.exports = {
    handler: fetchobject,
};