module.exports = (sequelize, DataTypes) => {
  const album = sequelize.define('album', {
    name: {
      type: DataTypes.STRING
    },
    release_date: {
      type: DataTypes.DATE
    }
  })

  album.associate = models => {
    album.belongsTo(models.artist);
    album.hasMany(models.song);
  }

  return album
}