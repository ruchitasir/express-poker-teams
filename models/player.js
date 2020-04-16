'use strict';
module.exports = (sequelize, DataTypes) => {
  const player = sequelize.define('player', {
    name: DataTypes.STRING,
    wins: DataTypes.INTEGER,
    losses: DataTypes.INTEGER,
    pic: DataTypes.STRING,
    bio: DataTypes.TEXT,
    teamId: DataTypes.INTEGER
  }, {});
  player.associate = function(models) {
    // associations can be defined here
    models.player.belongsTo(models.team)
  };
  return player;
};