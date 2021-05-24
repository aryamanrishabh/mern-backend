const Product = require("../models/product");
const shortid = require("shortid");
const slugify = require("slugify");

exports.createProduct = (req, res) => {
  //res.status(200).json({ file: req.files, body: req.body });

  const { name, price, description, category, color } = req.body;
  /* let stock = [];
  const size = req.body.stock.size;
  const inStock = req.body.stock.inStock;
  stock.push(stockObj); */
  let productPictures = [];

  if (req.files.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.filename };
    });
  }

  const product = new Product({
    name: name,
    slug: slugify(name),
    price,
    description,
    productPictures,
    category,
    color,
  });

  product.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
      res.status(201).json({ product });
    }
  });
};
