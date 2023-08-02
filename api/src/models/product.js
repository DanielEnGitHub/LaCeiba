import { Sequelize } from "sequelize";
import { sequelize } from "../db.js";

const Product = sequelize.define(
  "product",
  {
    id_product: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
    product: Sequelize.STRING,
    description: Sequelize.STRING,
    expiration_date: Sequelize.DATE,
    date_of_entry: Sequelize.DATE,
    id_provaider: Sequelize.INTEGER,
    quantity: Sequelize.INTEGER,
    price_cost: Sequelize.INTEGER,
    sale_price: Sequelize.INTEGER,
    existence: Sequelize.INTEGER,
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: false,
    tableName: "product",
  }
);

export default Product;