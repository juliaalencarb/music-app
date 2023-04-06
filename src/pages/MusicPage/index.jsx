import React, { useState, useEffect, useRef } from "react";
import { useAlbums } from "../../contexts";
import Accordion from 'react-bootstrap/Accordion';


export default function Music() {

    const { albums, setLikedMusic } = useAlbums();

    async function getLyrics(songTitle) {

        const lyrics = await fetch(`https://api.lyrics.ovh/v1/ghost/${songTitle}`)
    }

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
    };

    return (
        <>
            {albums.map(album => (
                <>
                    <img src={album.cover} alt={album.name} />
                    <h4>{album.name}</h4>
                    <span>{album.year}</span>
                    <Accordion>
                        {album.songs.map(song => (
                            <Accordion.Item eventKey={song.track + "." + album.id}>
                                <Accordion.Header>{song.liked ? "❤️" : " "}{song.track} - {song.title}</Accordion.Header>
                                <Accordion.Body>
                                    Some text.
                                    <button onClick={() => handleLike(album.id, song)}>Like</button>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </>
            ))}
        <br />
        </>
    )
}
