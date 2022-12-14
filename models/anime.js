'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.anime.belongsTo(models.user);
      models.anime.hasMany(models.comment);
    }
  }
  anime.init({
    title: DataTypes.STRING,
    episodes: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'anime',
  });
  return anime;
};