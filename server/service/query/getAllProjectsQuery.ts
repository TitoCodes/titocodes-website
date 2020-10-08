import monk from "monk";

const db = monk(process.env.MONGODB_CONNECTION_STRING);
const projects = db.get("projects");

export class GetAllProjectsQuery {
  async Execute () {
    let projectList = await projects.find({}).finally(() => {
      db.close();
    });
    return projectList;
  }
}
