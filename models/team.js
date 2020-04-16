'use strict';
module.exports = (sequelize, DataTypes) => {
  const team = sequelize.define('team', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    pic: DataTypes.STRING
  }, {});
  team.associate = function(models) {
    // associations can be defined here
    models.team.hasMany(models.player)
  };
  return team;
};