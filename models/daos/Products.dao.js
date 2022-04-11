const ContenedorMongoDb = require('../containers/Mongodb.container');
const ProductsSchema = require('../schemas/Products.schema');
const collection = "productos";

class ProductosDaoMongoDb extends ContenedorMongoDb {
  constructor() {
    super(collection, ProductsSchema)
  }
}

module.exports = ProductosDaoMongoDb