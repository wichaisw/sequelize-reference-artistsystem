module.exports = (sequelize, DataTypes) => {
  const artist = sequelize.define('artist', {
    name: {
      type: DataTypes.STRING
    },
    phone_number: {
      type: DataTypes.STRING(10)
    }
  })

  artist.associate = models => {
    artist.belongsTo(models.address);
    artist.hasMany(models.album);
    artist.hasMany(models.song);
    artist.belongsToMany(models.instrument, { through: models.play })
  }

  return artist
}