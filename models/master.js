'use strict';
module.exports = (sequelize, DataTypes) => {
  const master = sequelize.define('master', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    image: DataTypes.STRING,
    created_by: DataTypes.INTEGER
  }, {});
  master.associate = function(models) {
    // associations can be defined here
    master.belongsTo(models.user, {
      as: 'CreatedBy',
      foreignKey: 'created_by'
    });
    master.hasOne(models.favourite, {
      foreignKey: 'id',
      as: 'Favorite',
    });
  };
  return master;
};
