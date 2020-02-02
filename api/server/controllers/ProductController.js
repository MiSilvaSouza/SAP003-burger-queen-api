import models from '../src/models/index'

const getAllProduct = async (req, res) => {
  const products = await models.products.findAll({raw: true})
  res.json(products)
}

export default {
  getAllProduct,
  
}