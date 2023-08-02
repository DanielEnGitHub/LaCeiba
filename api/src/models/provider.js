import { Sequelize } from "sequelize";
import { sequelize } from "../db.js";

const Provider = sequelize.define(
  "provaider",
  {
    id_provaider: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    nit: Sequelize.INTEGER,
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: false,
    tableName: "provaider",
  }
);

export default Provider;