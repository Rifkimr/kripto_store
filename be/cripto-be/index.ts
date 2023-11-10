import * as express from "express";
import { Request, Response } from "express";
import * as cors from "cors";
import { AppDataSource } from "./src/data-source";
import router from "./src/route/index";
import path = require("path");

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const port = 5000;

    // const router = express.Router();
    app.use(cors());
    app.use(express.json());
    app.use("/uploads", express.static(path.join(__dirname + "/uploads")));
    app.use("/api/v1", router);

    app.get("/", (req: Request, res: Response) => {
      res.send("Bismillah");
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.log(error));
