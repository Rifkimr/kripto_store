import { Request, Response } from "express";
import ProductServices from "./../services/ProductService";

class ProdukController {
  create(req: Request, res: Response) {
    ProductServices.create(req, res);
  }
  find(req: Request, res: Response) {
    ProductServices.find(req, res);
  }
  delete(req: Request, res: Response) {
    ProductServices.delete(req, res);
  }
  update(req: Request, res: Response) {
    console.log(req.body);

    ProductServices.update(req, res);
  }
}

export default new ProdukController();
