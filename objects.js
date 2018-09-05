<<<<<<< HEAD
var playlist = {'ekali': 'leaving'}
=======
var playlist = {Ekali: 'leaving'}
>>>>>>> 1dd8941cb6523767d883eacbb8a02fddac9dc409

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
<<<<<<< HEAD
  delete playlist[artistName]
=======
  delete playlist.artistName('Slowdive');
>>>>>>> 1dd8941cb6523767d883eacbb8a02fddac9dc409
  return playlist
}