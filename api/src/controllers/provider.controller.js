import Provider from "../models/provider.js";

// GET
export const getProvider = async (req, res) => {
    try {
        const provider = await Provider.findAll({
        where: {
            active: true,
        },
        });

        res.json(provider);
    } catch (error) {
        console.log(error);
        return res
        .status(500)
        .json({ message: "Error getting request to backend D:" });
    }
}

// POST
export const postProvider = async (req, res) => {
    try {
        const { name, last_name, nit } = req.body;

        const provider = await Provider.create(
        {
            name,
            last_name,
            nit,
        },
        {
            fields: ["name", "last_name", "nit"],
        }
        );

        if (provider) {
        return res.json({
            message: "Provider created successfully",
            data: provider,
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
export const deleteProvider = async (req, res) => {
    try {
        const { id } = req.params;
    
        const provider = await Provider.findOne({
          where: {
            id_provaider: id,
            active: true,
          },
        });
    
        if (!provider) {
          return res.status(404).json({ message: "Error delete" });
        }
    
        await provider.update({ active: false });
    
        res.json({ message: "Provider deleted successfully" });
      } catch (error) {
        console.log(error);
        return res
          .status(500)
          .json({ message: "Error getting request to backend D:" });
      }
}

// VIEW
export const viewProvider = async (req, res) => {
    try {
        const { id } = req.params;
    
        const provider = await Provider.findOne({
          where: {
            id_provaider: id,
            active: true,
          },
        });
    
        if (!provider) {
          return res.status(404).json({ message: "Error view" });
        }
    
        res.json(provider);
      } catch (error) {
        console.log(error);
        return res
          .status(500)
          .json({ message: "Error getting request to backend D:" });
      }
}

// UPDATE
export const updateProvider = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, last_name, nit } = req.body;
    
        const provider = await Provider.findOne({
          where: {
            id_provaider: id,
            active: true,
          },
        });
    
        if (!provider) {
          return res.status(404).json({ message: "Error update" });
        }
    
        await provider.update({
          name,
          last_name,
          nit,
        });
    
        res.json({ message: "Provider updated successfully" });
      } catch (error) {
        console.log(error);
        return res
          .status(500)
          .json({ message: "Error getting request to backend D:" });
      }
}