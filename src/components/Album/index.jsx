export default function Album({ handleLike, albums }) {
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
