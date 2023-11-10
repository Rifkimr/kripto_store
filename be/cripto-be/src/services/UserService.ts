import { Repository } from "typeorm";
import { User } from "../entities/User";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import * as bcrypt from "bcrypt";

class UserServices {
  private readonly UserRepository: Repository<User> =
    AppDataSource.getRepository(User);

  async find(req: Request, res: Response): Promise<Response> {
    const user = await this.UserRepository.find();
    return res.status(200).json(user);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);

    try {
      const user = await this.UserRepository.findOne({
        where: {
          id: id,
        },
      });

      if (!User) {
        return res.status(400).json("User not Found");
      }

      await this.UserRepository.remove(user);
      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "gagal delelet user" });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { username, email, phone_number } = req.body;

    const password = await bcrypt.hash("123456", 10);

    try {
      const product = this.UserRepository.create({
        username,
        email,
        phone_number,
        role: "user",
        password: password,
      });
      const saveUser = await this.UserRepository.save(product);

      return res.status(200).json(saveUser);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);
    const { username, email, phone_number } = req.body;

    try {
      const user = await this.UserRepository.findOne({
        where: { id: id },
      });
      console.log(user, req.body);

      (user.username = username),
        (user.email = email),
        (user.phone_number = phone_number);

      const updateUser = await this.UserRepository.save(user);

      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json({ error: "Error While Updatting User" });
    }
  }
}

export default new UserServices();
