import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
  create(req: Request, res: Response) {
    UserService.create(req, res);
  }
  find(req: Request, res: Response) {
    UserService.find(req, res);
  }
  delete(req: Request, res: Response) {
    UserService.delete(req, res);
  }
  update(req: Request, res: Response) {
    console.log(req.body);

    UserService.update(req, res);
  }
}

export default new UserController();
