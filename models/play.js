module.exports = (sequelize, DataTypes) => {
  const play = sequelize.define('play', {
    minute: {
      type: DataTypes.INTEGER
    }
  })

  return play;
}