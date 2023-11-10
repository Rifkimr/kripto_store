import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { Request, Response } from "express";
class AuthService {
  private readonly authRepository: Repository<User> =
    AppDataSource.getRepository(User);

  async register(req: Request, res: Response) {
    try {
      const isEmailRegistered = await this.authRepository.count({
        where: {
          email: req.body.email,
        },
      });

      if (isEmailRegistered > 0) {
        throw new Error("Email is already registered!");
      }

      const password = await bcrypt.hash(req.body.password, 10);

      const user = this.authRepository.create({
        username: req.body.username,
        email: req.body.email,
        password: password,
        phone_number: req.body.phone_number,
        role: "user",
      });

      await this.authRepository.save(user);

      return {
        message: "Registration successful!",
        user: user,
      };
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async login(reqBody: any): Promise<any> {
    try {
      const user = await this.authRepository.findOne({
        where: {
          email: reqBody.email,
        },
        select: ["id", "email", "username", "phone_number", "password", "role"],
      });

      if (!user) {
        throw new Error("Email / password is wrong!");
      }

      const isPasswordValid = await bcrypt.compare(
        reqBody.password,
        user.password
      );

      if (!isPasswordValid) {
        throw new Error("Email / password is wrong!");
      }

      const token = jwt.sign({ user }, "dumbwaysterbaik", { expiresIn: "1d" });

      return {
        message: "Login successful!",
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
        token: token,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new AuthService();
