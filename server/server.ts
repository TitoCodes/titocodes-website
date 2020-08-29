import * as express from "express";
import * as cors from "cors";
import * as morgan from "morgan";
import * as helmet from "helmet";
import monk from "monk";

const db = monk(process.env.MONGODB_CONNECTION_STRING);
const projects = db.get("projects");
const app = express();

app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.post("/project", async (req, res) => {
  let project = req.body;
  var addedProject = await projects
    .insert({
      name: project.name,
    })
    .finally(() => {
      db.close();
    });
  res.status(201).json({
    message: `Added ${project.name} successfully.`,
    project: addedProject,
  });

  return res;
});

app.put("/project", async (req, res) => {
  let project = req.body;
  projects
    .findOneAndUpdate(
      {
        _id: project.id,
      },
      {
        $set: {
          name: project.name,
        },
      }
    )
    .finally(() => {
      db.close();
    });
  res.status(204).json({
    message: `Updated to ${project.name} successfully.`,
  });

  return res;
});

app.get("/project/:id", async (req, res) => {
  let id = req.params.id;
  let project = await projects
    .findOne({
      _id: id,
    })
    .finally(() => {
      db.close();
    });

  res.json({
    project: project,
  });

  return res;
});

app.delete("/project/:id", async (req, res) => {
  let id = req.params.id;
  await projects
    .findOneAndDelete({
      _id: id,
    })
    .finally(() => {
      db.close();
    });

  res.status(204).json({});

  return res;
});

app.get("/project", async (req, res) => {
  let projectList = await projects.find({}).finally(() => {
    db.close();
  });
  console.log(projectList);
  res.json({
    projectList,
  });

  return res;
});

app.get("/article/:id", (req, res) => {
  // TODO: serving the article
});

app.post("/article/add", (req, res) => {
  // TODO: adding a new article
});

app.post("/article/update", (req, res) => {
  // TODO: updating an article
});

app.post("/landing/about", (req, res) => {
  // TODO: Updating the about page
});

app.post("/landing/home", (req, res) => {
  // TODO: Updating the home page
});

app.use(express.static("./public"));

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
