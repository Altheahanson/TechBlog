const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    title: {type: DataTypes.STRING},
    body: {type: DataTypes.STRING},
  

  dateCreated: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }},

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  
  }
);

module.exports = Post;