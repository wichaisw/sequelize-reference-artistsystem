const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/add-artist', async function (req, res) {
  const newAddress = await db.address.create({ addr: req.body.addr });
  const newArtist = await db.artist.create({
    name: req.body.name,
    phone_number: req.body.phoneNO,
    addressId: newAddress.id
  })
  const newAlbum = await db.album.create({
    name: req.body.album.name,
    release_date: req.body.album.release_date,
    artistId: newArtist.id
  })
  const newSong = await db.song.create({
    name: req.body.song.name,
    albumId: newAlbum.id,
    artistId: newArtist.id
  })
  res.send({ newAddress, newAlbum, newArtist, newSong })
})

db.sequelize.sync().then(() => {
  app.listen(8000, () => {
    console.log("Server is running on port 8000")
  })
})