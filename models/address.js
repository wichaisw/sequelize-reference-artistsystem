module.exports = (sequelize, DataTypes) => {
  const address = sequelize.define('address', {
    addr: {
      type: DataTypes.STRING
    }
  })

  address.associate = models => {
    address.hasMany(models.artist);
  }

  return address;
}