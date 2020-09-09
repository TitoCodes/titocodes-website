import monk from "monk";

const db = monk(process.env.MONGODB_CONNECTION_STRING);
const projects = db.get("projects");

export class UpdateProjectViaIdCommand {
  async Execute (project: any) {
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
  }
}
