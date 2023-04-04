import React, { useState } from 'react';
import Album from '../Album';

export default function Discography({ albums, setLikedMusic }) {
  // A list of their songs/albums including name,release date and cover art.
  // Add a 'Like' feature to your music page.
  

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
      <div className='discography-container'>
        {albums.map((album, index) =>
          <Album handleLike={ handleLike } albums={ albums } key={ index } />
        )}
      </div>
    </>
  )
}