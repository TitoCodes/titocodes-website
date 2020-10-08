import monk from "monk";

const db = monk(process.env.MONGODB_CONNECTION_STRING);
const projects = db.get("projects");

export class InsertProjectCommand {
  async Execute (project: any) {
    var addedProject = await projects
    .insert({
      name: project.name,
    })
    .finally(() => {
      db.close();
    });

    return addedProject;
  }
}
