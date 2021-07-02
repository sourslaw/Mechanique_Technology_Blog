const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blogpost extends Model {}

Blogpost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    // comment_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'comment',
    //     key: 'id',
    //   },
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogpost',
  }
);

module.exports = Blogpost;
