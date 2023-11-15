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
    app.use(
      cors({
        origin: "https://kripto-store.vercel.app",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true, // Enable credentials (if you need to include cookies or HTTP authentication)
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
