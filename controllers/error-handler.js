const Project = require('../models/project');

const errorHandler = (res, error) => {
    res
      .status(500)
      .json({ error });
};

const validationHandler = (req) => {
    bodyType = req.rawHeaders[1];
    body = req.body;
    schemaAttributes = Object.keys(Project.schema.obj); 

    error = checkRequestBody(bodyType); 

    if (error) {
        return error;
    }

    const bodyJson = Object.keys(body);
    error = checkBodyAttributes(schemaAttributes, bodyJson);
    
    if (error) {
        return error;
    }

    error = checkBodyAttributesExisting(schemaAttributes, bodyJson);

    if (error) {
        return error;
    }

    return null;
};


const checkRequestBody = (bodyType) => {
    
    bodyJsonCheckError = "Request got wrong body data type!";

    if (bodyType !== 'application/json') {
        return bodyJsonCheckError;
    }

    return null;
};

const checkBodyAttributes = (schemaAttributes, bodyJson) => {
    
    const attributeCheckError = "Has been sent more JSON attributes that exist!";
    
    if (schemaAttributes.length < bodyJson.length) {
        return attributeCheckError;
    }

    return null;
};

const checkBodyAttributesExisting = (schemaAttributes, bodyJson) => {

    const attributeExistingCheckError = "Field in your request body does not exist in database table!";

    for (const attributeName of bodyJson) {
        if (schemaAttributes.indexOf(attributeName) === -1) {
            return attributeExistingCheckError;
        }
    }

    return null;
};

module.exports = {
    validationHandler,
    errorHandler
};