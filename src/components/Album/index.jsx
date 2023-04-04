import Accordion from 'react-bootstrap/Accordion';

export default function Album({ handleLike, albums }) {
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

// 

{/* <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{song.liked ? "❤️" : " "}{song.track} - {song.title}</Accordion.Header>
        <Accordion.Body>
          Some text.
        </Accordion.Body>
      </Accordion.Item>
    <button onClick={() => handleLike(album.id, song)}>Like</button> */}
