import Category from "../models/category.js";

// GET
export const getCategory = async (req, res) => {
    try {
        const category = await Category.findAll({
        where: {
            active: true,
        },
        });

        res.json(category);
    } catch (error) {
        console.log(error);
        return res
        .status(500)
        .json({ message: "Error getting request to backend D:" });
    }
};

// POST
export const postCategory = async (req, res) => {
    try {
        const { categoria, description } = req.body;

        const category = await Category.create(
        {
            categoria,
            description,
        },
        {
            fields: ["categoria", "description"],
        }
        );

        if (category) {
        return res.json({
            message: "Category created successfully",
            data: category,
        });
        }
    } catch (error) {
        console.log(error);
        return res
        .status(500)
        .json({ message: "Error posting request to backend D:" });
    }
}

// DELETE
export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
    
        const category = await Category.findOne({
          where: {
            id_category: id,
            active: true,
          },
        });
    
        if (!category) {
          return res.status(404).json({ message: "Error delete" });
        }
    
        await category.update({ active: false });
    
        res.json({ message: "Category deleted" });
      } catch (error) {
        console.log(error);
        return res
          .status(500)
          .json({ message: "Error getting request to backend D:" });
      }
}

// VIEW
export const viewCategory = async (req, res) => {
    try {
        const { id } = req.params;
    
        const category = await Category.findOne({
          where: {
            id_category: id,
            active: true,
          },
        });
    
        if (!category) {
          return res.status(404).json({ message: "Error view" });
        }
    
        res.json(category);
      } catch (error) {
        console.log(error);
        return res
          .status(500)
          .json({ message: "Error getting request to backend D:" });
      }
}

// UPDATE
export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { categoria, description } = req.body;
    
        const category = await Category.findOne({
          where: {
            id_category: id,
            active: true,
          },
        });
    
        if (!category) {
          return res.status(404).json({ message: "Error update" });
        }
    
        await category.update({
          categoria,
          description,
        });
    
        res.json({ message: "Category updated" });
      } catch (error) {
        console.log(error);
        return res
          .status(500)
          .json({ message: "Error getting request to backend D:" });
      }
}