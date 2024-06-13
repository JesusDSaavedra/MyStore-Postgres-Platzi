const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { Op } = require('sequelize');

class ProductsService {
  constructor() {}

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find(query) {
    const options = {
      include: ['category'],
      where: {},
    };
    const { limit, page, price, price_max, price_min } = query;
    if (limit && page) {
      options.limit = limit;
      options.offset = limit * (page - 1);
    }

    if (price) {
      options.where.price = price;
    }

    if (price_min && price_max) {
      options.where.price = {
        // [Op.gte]: price_min,
        // [Op.lte]: price_max,
        [Op.between]: [price_min, price_max],
      };
    }

    const products = await models.Product.findAll(options);
    return products;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id, {
      include: ['category'],
    });
    if (!product) {
      throw boom.notFound('Product not found');
    }
    return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const rta = await product.update(changes);
    return rta;
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy(id);
    return { id };
  }
}

module.exports = ProductsService;
