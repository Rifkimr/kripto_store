import * as express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./src/data-source";
import router from "./src/route/index";
import dotenv = require("dotenv");
import path = require("path");
dotenv.config();

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const port = process.env.PORT;
    const cors = require("cors");

    // Configure CORS middleware
    const allowedOrigins = ["https://kripto-store.vercel.app"];
    app.use(
      cors({
        origin: function (origin, callback) {
          if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
          } else {
            callback(new Error("Not allowed by CORS"));
          }
        },
      })
    );

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
