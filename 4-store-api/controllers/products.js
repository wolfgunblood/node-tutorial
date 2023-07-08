const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
    // throw new Error('testing async errors')
    const products = await Product.find({    
    });
    res.status(201).json({ products, nbHits:products.length });
}

const getAllProducts = async (req, res) => {
    // res.status(200).json({msg: 'products route'})

    const products = await Product.find({});
    res.status(201).json({ products });
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}