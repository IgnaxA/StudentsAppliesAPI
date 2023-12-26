const express = require('express');
const {
  getProjects,
  getProject,
  deleteProject,
  addProject,
  updateProject
} = require('../controllers/project-controller')

const projectRouter = express.Router();

projectRouter.get('/projects', getProjects);
projectRouter.get('/projects/:id', getProject);
projectRouter.delete('/projects/:id', deleteProject);
projectRouter.post('/projects', addProject);
projectRouter.patch('/projects/:id', updateProject);

module.exports = projectRouter;