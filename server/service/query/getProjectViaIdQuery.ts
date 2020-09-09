import monk from "monk";

const db = monk(process.env.MONGODB_CONNECTION_STRING);
const projects = db.get("projects");

export class GetProjectViaIdQuery {
  async Execute (id: any) {
    let project = await projects
    .findOne({
      _id: id,
    })
    .finally(() => {
      db.close();
    });

    return project;
  }
}
