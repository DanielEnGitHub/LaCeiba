import { Sequelize } from "sequelize";
import { sequelize } from "../db.js";

const Category = sequelize.define(
  "category",
  {
    id_category: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: Sequelize.STRING,
    categoria: { type: Sequelize.STRING, allowNull: false },
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: false,
    tableName: "category",
  }
);

export default Category;