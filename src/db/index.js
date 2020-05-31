const Sequelize = require("sequelize");
const config = require("../config/sequelize");
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const User = require("../domains/auth/models/user");
const Order = require("../domains/orders/models/order");
const OrderProduct = require("../domains/orders/models/order_product");
const Product = require("../domains/products/models/product");
const Category = require("../domains/products/models/category");
const Review = require("../domains/products/models/review");
const Address = require("../domains/profile/models/address");
const Profile = require("../domains/profile/models/profile");

const models = {
  User: User.init(sequelize, Sequelize),
  Order: Order.init(sequelize, Sequelize),
  OrderProduct: OrderProduct.init(sequelize, Sequelize),
  Product: Product.init(sequelize, Sequelize),
  Category: Category.init(sequelize, Sequelize),
  Review: Review.init(sequelize, Sequelize),
  Address: Address.init(sequelize, Sequelize),
  Profile: Profile.init(sequelize, Sequelize),
};

// Run `.associate` if it exists,
// ie create relationships in the ORM
Object.values(models)
  .filter((model) => typeof model.associate === "function")
  .forEach((model) => model.associate(models));

const db = {
  ...models,
  sequelize,
};

module.exports = db;
