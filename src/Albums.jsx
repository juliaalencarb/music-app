import React, { useState } from 'react';

export default function Albums() {
  // A list of their songs/albums including name,release date and cover art.
  // Add a 'Like' feature to your music page.
  const [albums, setLikedMusic] = useState([ 
    { id: 1, 
      cover: "https://lh3.googleusercontent.com/QIwXaBt4cHDmxUzRIlosAgWKr_NjeqW6-eRgRabNka8OwIyauYZmU9BMDTFLgA2JxsN1xabUaN7Ulnzd=w544-h544-l90-rj",
      name: "Impera", 
      year: 2022, 
      songs: [
        { track: 1, 
          title: "Imperium", 
          liked: false }, 
        { track: 2, 
          title: "Kaisarion", 
          liked: false },
        { track: 3, 
          title: "Spillways", 
          liked: false },
        { track: 4, 
          title: "Call Me Little Sunshine", 
          liked: false},
        { track: 5, 
          title: "Hunter's Moon", 
          liked: false},
        { track: 6, 
          title: "Watcher in the Sky", 
          liked: false},
        { track: 7, 
          title: "Dominion", 
          liked: false},
        { track: 8, 
          title: "Twenties", 
          liked: false},
        { track: 9, 
          title: "Darkness at the Heart of My Love", 
          liked: false},
        { track: 10, 
          title: "Griftwood", 
          liked: false},
        { track: 11, 
          title: "Bit of Passage", 
          liked: false},
        { track: 12, 
          title: "Respite on the Spitalfields", 
          liked: false}]},
    { id: 2, 
      cover: "https://lh3.googleusercontent.com/pyYkr2feY6kSRQEONuTs9f6lBg8tilWVbO-XXpy3zLvyvT1fgRs0YZA6dLPSeAIQVpQo51Olt9oWbIpw=w544-h544-l90-rj",
      name: "Prequelle", 
      year: 2018, 
      songs: [
        { track: 1, 
          title: "Ashes", 
          liked: false}, 
        { track: 2, 
          title: "Rats", 
          liked: false },
        { track: 3, 
          title: "Faith", 
          liked: false},
        { track: 4, 
          title: "See the Light", 
          liked: false},
        { track: 5, 
          title: "Miasma", 
          liked: false},
        { track: 6, 
          title: "Dance Macabre", 
          liked: false},
        { track: 7, 
          title: "Pro Memoria", 
          liked: false},
        { track: 8, 
          title: "Witch Image", 
          liked: false},
        { track: 9, 
          title: "Helvetesfonster", 
          liked: false},
        { track: 10, 
          title: "Life Eternal", 
          liked: false}]}
  ])

  function handleLike(albumId, song) {
    const mutatedAlbums = albums.map((album, index) => {
      if (index === albumId - 1) {
        let songState = albums[index].songs.find(chosenSong => chosenSong.track == song.track);
        songState.liked = !songState.liked;
        return album;
      } else {
        return album;
      }
    });

    setLikedMusic(mutatedAlbums)
  }

  return (
    <>
      {albums.map(album => (
          <>
          <img src={album.cover} alt={album.name} />
          <h4>{album.name}</h4>
          <span>{album.year}</span>
          <ul>
          {album.songs.map(song => (
            <li onClick={() => handleLike(album.id, song)}> 
              {song.track} - {song.title} {song.liked ? <b>❤️</b> : <b> </b>}
            </li>
          ))}
          </ul>
          </>
        ))}
      <br />
    </>
  )
}