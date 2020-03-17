module.exports = (sequelize, DataTypes) => {
  const instrument = sequelize.define('instrument', {
    name: {
      type: DataTypes.STRING
    }
  })

  instrument.associate = models => {
    instrument.belongsToMany(models.song, { through: 'InstrumentSong' })
    instrument.belongsToMany(models.artist, { through: models.play })
  }

  return instrument
}