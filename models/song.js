module.exports = (sequelize, DataTypes) => {
  const song = sequelize.define('song', {
    name: {
      type: DataTypes.STRING
    }
  })

  song.associate = models => {
    song.belongsTo(models.album);
    song.belongsTo(models.artist);
    song.belongsToMany(models.instrument, { through: 'InstrumentSong' })
  }

  return song;
}