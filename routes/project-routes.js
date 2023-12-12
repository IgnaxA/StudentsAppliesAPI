const express = require('express');
const {
  getProjects,
  getProject,
  deleteProject,
  addProject,
  updateProject
} = require('../controllers/project-controller')

const projectRouter = express.Router();

projectRouter.get('/project', getProjects);
projectRouter.get('/project/:id', getProject);
projectRouter.delete('/project/:id', deleteProject);
projectRouter.post('/project', addProject);
projectRouter.patch('/project/:id', updateProject);

module.exports = projectRouter;