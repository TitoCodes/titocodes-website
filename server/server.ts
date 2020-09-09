import * as express from "express";
import * as cors from "cors";
import * as morgan from "morgan";
import * as helmet from "helmet";

const app = express();
const projectRoute = require('./route/projectRoute');

app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use('/project', projectRoute);
app.use(express.static("./public"));

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
