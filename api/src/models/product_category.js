import { Sequelize } from "sequelize";
import { sequelize } from "../db.js";

const ProductCategory = sequelize.define(
  "product_category",
  {
    id_pc: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_product: Sequelize.INTEGER,
    id_category: Sequelize.INTEGER,
  },
  {
    timestamps: false,
    tableName: "product_category",
  }
);

export default ProductCategory;
