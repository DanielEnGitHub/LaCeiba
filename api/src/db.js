import { DataTypes, Op, Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const databaseName = dotenv.config().parsed.DATABASE_NAME;
const databaseUser = dotenv.config().parsed.DATABASE_USER;
const databasePassword = dotenv.config().parsed.DATABASE_PASSWORD;

const sequelize = new Sequelize(databaseName, databaseUser, databasePassword, {
  host: "10.192.0.4",
  port: 1433,
  dialect: "mssql",
  dialectOptions: {
    requestTimeout: 300000,
    options: {
      useUTC: false,
      timezone: "localtime",
      dateFirst: 1,
      enableArithAbort: false,
      dateStrings: true,
      typeCast: true,
      requestTimeout: 300000,
      instanceName: "DEV",
    },
  },
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000,
  },
  logging: false,
});

export { DataTypes, sequelize, Op };