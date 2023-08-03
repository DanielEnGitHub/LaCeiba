import Category from "../models/category.js";
import Product from "../models/product.js";
import ProductCategory from "../models/product_category.js";
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
    categories,
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

    try {
      categories.forEach(async (category) => {
        await ProductCategory.create({
          id_product: newProduct.id_product,
          id_category: category.value,
        });
      });
    } catch (error) {
      console.log(error);
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

    try {
      const categories = await ProductCategory.findAll({
        where: {
          id_product: product.id_product,
        },
      });

      const categoryNames = await Promise.all(
        categories.map(async (category) => {
          const categoryName = await Category.findOne({
            where: {
              id_category: category.id_category,
            },
            attributes: ["categoria"], // Assuming the category name is stored in the 'categoria' field
          });

          return categoryName.categoria; // Assuming the category name is stored in the 'categoria' field
        })
      );

      product.dataValues.categories = categories.map((category, index) => {
        return {
          label: categoryNames[index],
          value: category.id_category,
        };
      });
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
      categories,
    } = req.body;

    // Obtener una lista de IDs de categorías desde la data recibida del cliente
    const categoryIds = categories.map((category) => category.value);

    const productToUpdate = await Product.findOne({
      where: {
        id_product: id,
        active: true,
      },
    });

    if (!productToUpdate) {
      return res.status(404).json({ message: "Error update" });
    }

    // Actualizar las propiedades del producto
    await productToUpdate.update({
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

    // Actualizar las categorías del producto
    if (categoryIds && categoryIds.length > 0) {
      await ProductCategory.destroy({
        where: {
          id_product: productToUpdate.id_product,
        },
      });

      const categoryUpdates = categoryIds.map((categoryId) => ({
        id_product: productToUpdate.id_product,
        id_category: categoryId,
      }));

      await ProductCategory.bulkCreate(categoryUpdates);
    }

    return res.json({
      message: "Product updated successfully",
      data: productToUpdate,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error getting request to backend D:" });
  }
};
