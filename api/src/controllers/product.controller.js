import Product from "../models/product.js";
import Provider from "../models/provider.js";

// GET
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        active: true,
      },
    });

    res.json(product);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error getting request to backend D:" });
  }
};

// POST
export const postProduct = async (req, res) => {
  const {
    product,
    description,
    expiration_date,
    date_of_entry,
    id_provaider,
    quantity,
    price_cost,
    sale_price,
    existence,
  } = req.body;

  try {
    const newProduct = await Product.create(
      {
        product,
        description,
        expiration_date,
        date_of_entry,
        id_provaider,
        quantity,
        price_cost,
        sale_price,
        existence,
      },
      {
        fields: [
          "product",
          "description",
          "expiration_date",
          "date_of_entry",
          "id_provaider",
          "quantity",
          "price_cost",
          "sale_price",
          "existence",
        ],
      }
    );
    if (!newProduct) {
      return res.status(500).send("Error");
    }
    return res.json({
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error getting request to backend D:" });
  }
};

// DELETE
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({
      where: {
        id_product: id,
        active: true,
      },
    });

    if (!product) {
      return res.status(404).json({ message: "Error delete" });
    }

    await product.update({ active: false });

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error getting request to backend D:" });
  }
};

// VIEW
export const viewProduct = async (req, res) => {
  try {
    const { id } = req.params;

    let product = await Product.findOne({
      where: {
        id_product: id,
        active: true,
      },
    });

    try {
      const id_provaider = await Provider.findOne({
        where: {
          id_provaider: product.id_provaider,
        },
      });

      product.id_provaider = {
        label: id_provaider.name,
        value: id_provaider.id_provaider,
      };
    } catch (error) {
      console.log(error);
    }

    if (!product) {
      return res.status(404).json({ message: "Error view" });
    }

    res.json(product);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error getting request to backend D:" });
  }
};

// UPDATE
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      product,
      description,
      expiration_date,
      date_of_entry,
      id_provaider,
      quantity,
      price_cost,
      sale_price,
      existence,
    } = req.body;

    const products = await Product.findOne({
      where: {
        id_product: id,
        active: true,
      },
    });

    if (!products) {
      return res.status(404).json({ message: "Error update" });
    }

    await products.update({
      product,
      description,
      expiration_date,
      date_of_entry,
      id_provaider,
      quantity,
      price_cost,
      sale_price,
      existence,
    });

    return res.json({
      message: "Product updated successfully",
      data: products,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error getting request to backend D:" });
  }
};
