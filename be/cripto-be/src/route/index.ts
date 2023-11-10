import * as express from "express";
import { Request, Response } from "express";
import AuthController from "../controller/AuthController";
import ProdukController from "../controller/ProdukController";
import { upload } from "../middleware/uploadProduk";
import UserController from "../controller/UserController";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("hello word");
});

router.post("/auth/login", AuthController.login);
router.post("/auth/register", AuthController.register);
router.post("/produk", upload("image"), ProdukController.create);
router.post("/user", UserController.create);

router.get("/produk", ProdukController.find);
router.get("/user", UserController.find);

router.delete("/produk/:id", ProdukController.delete);
router.delete("/user/:id", UserController.delete);

router.patch("/produk/:id", upload("image"), ProdukController.update);
router.patch("/user/:id", UserController.update);

export default router;
