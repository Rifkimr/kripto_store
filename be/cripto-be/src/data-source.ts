import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "roundhouse.proxy.rlwy.net",
  port: 46855,
  username: "postgres",
  password: "bC5-a1F3a2a3b2EggG3Bd3GfAFdcgDAE",
  database: "railway",
  synchronize: true,
  logging: false,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
});
