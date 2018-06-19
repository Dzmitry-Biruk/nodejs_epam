const getProducts = (req, res, products) => {
  res.json(products || []);
};

const getProductById = (req, res) => {
  if (!req.product) {
    res.send('Invalid User id!');
  }

  res.json(req.product);
};

module.exports = { getProducts, getProductById };
