const Project = require('../models/project');

const errorHandler = (res, error) => {
    res
      .status(500)
      .json({ error });
};

const validationHandler = (req) => {
    
    try {
        bodyType = req.rawHeaders[1];
        body = req.body;
        schemaAttributes = Object.keys(Project.schema.obj); 

        checkRequestBody(bodyType); 

        const bodyJson = Object.keys(body);
        checkBodyAttributes(schemaAttributes, bodyJson);
        
        checkBodyAttributesExisting(schemaAttributes, bodyJson);
    }
    catch (err) {
        return err;
    }
    
    return null;
};


const checkRequestBody = (bodyType) => {
    
    bodyJsonCheckError = "Request got wrong body data type!";

    if (bodyType !== 'application/json') {
        throw bodyJsonCheckError;
    }
};

const checkBodyAttributes = (schemaAttributes, bodyJson) => {
    
    const attributeCheckError = "Has been sent more JSON attributes that exist!";
    
    if (schemaAttributes.length < bodyJson.length) {
        throw attributeCheckError;
    }
};

const checkBodyAttributesExisting = (schemaAttributes, bodyJson) => {

    const attributeExistingCheckError = "Field in your request body does not exist in database table!";

    for (const attributeName of bodyJson) {
        if (schemaAttributes.indexOf(attributeName) === -1) {
            throw attributeExistingCheckError;
        }
    }
};

module.exports = {
    validationHandler,
    errorHandler
};