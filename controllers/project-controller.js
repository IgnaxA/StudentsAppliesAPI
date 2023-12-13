const Project = require('../models/project');
const { validationHandler, errorHandler } = require('./error-handler');



const getProjects = (req, res) => {
    Project
      .find()
      .then((projects) => {
        res
          .status(200)
          .json(projects);
      })
      .catch((err) => errorHandler(res, err));
};

const getProject = (req, res) => {
    Project
      .findById( req.params.id )
      .then((project) => {
        res
          .status(200)
          .json(project);
      })
      .catch((err) => errorHandler(res, err));
};

const deleteProject = (req, res) => {
    Project
      .findOneAndDelete( req.params.id )
      .then((result) => {
        res
          .status(200)
          .json(result);
      })
      .catch((err) => errorHandler(res, err));
};

const addProject = (req, res) => {
    validationResult = validationHandler(req); 

    if (validationResult) {
      errorHandler(res, validationResult);
      return;
    }

    const project = new Project(req.body);
    project
      .save()
      .then((result) => {
        res
          .status(201)
          .json(result);
      })
      .catch((err) => errorHandler(res, err));
};

const updateProject = (req, res) => {
    Project
      .findByIdAndUpdate( req.params.id, req.body )
      .then((result) => {
        res
          .status(200)
          .json(result);
      })
      .catch((err) => errorHandler(res, err));
};

module.exports = {
    getProjects,
    getProject,
    deleteProject,
    addProject,
    updateProject
};