const getAllProductsStatic = async (req, res) => {
    res.status(200).json({msg: 'products static route'})
}

const getAllProducts = async (req, res) => {
    res.status(200).json({msg: 'products route'})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}