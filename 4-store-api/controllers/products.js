const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
    // throw new Error('testing async errors')
    const products = await Product.find({price: {$gt: 30}}).sort('name').select('name price');
    res.status(201).json({ products, nbHits: products.length });
}

const getAllProducts = async (req, res) => {
    // res.status(200).json({msg: 'products route'})
    // console.log(req.query)

    const { featured, company, name, sort, fields, numericFilters, page } = req.query;

    const queryObject = {};

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };

    }
    // console.log(queryObject)

    let results = Product.find(queryObject);

    if(sort){
        console.log(sort)
        const sortList = sort.split(',').join(' ');
        results = results.sort(sortList);
        console.log(sortList)
    }
    const products = await results;
    res.status(201).json({ products, nbHits: products.length });
    // res.status(201).json({ products });
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}