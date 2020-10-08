var express = require("express");
var router = express.Router();
import {GetAllProjectsQuery} from '../service/query/getAllProjectsQuery';
import {GetProjectViaIdQuery} from '../service/query/getProjectViaIdQuery';
import {DeleteProjectViaIdCommand} from '../service/command/deleteProjectViaIdCommand';
import {UpdateProjectViaIdCommand} from '../service/command/updateProjectViaIdCommand';
import {InsertProjectCommand} from '../service/command/insertProjectCommand';

router.post("/", async (req, res) => {
  let project = req.body;
  var addedProject = await new InsertProjectCommand().Execute(project);
  res.status(201).json({
    message: `Added ${project.name} successfully.`,
    project: addedProject,
  });

  return res;
});

router.put("/", async (req, res) => {
  let project = req.body;
  await new UpdateProjectViaIdCommand().Execute(project);

  res.status(204).json({
    message: `Updated to ${project.name} successfully.`,
  });

  return res;
});

router.get("/fetchall", async (req, res) => {
    let projectList = await new GetAllProjectsQuery().Execute();
    res.json({
      projectList,
    });
  
    return res;
  });

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let project = await new GetProjectViaIdQuery().Execute(id);

  res.json({
    project: project,
  });

  return res;
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  await new DeleteProjectViaIdCommand().Execute(id);

  res.status(204).json({});
  return res;
});

module.exports = router;
