import monk from "monk";

const db = monk(process.env.MONGODB_CONNECTION_STRING);
const projects = db.get("projects");

export class DeleteProjectViaIdCommand {
  async Execute (id: any) {
    await projects
    .findOneAndDelete({
      _id: id,
    })
    .finally(() => {
      db.close();
    });
  }
}
