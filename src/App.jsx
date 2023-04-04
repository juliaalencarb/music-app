import React, { useState } from 'react';
import './App.css';
import { Discography } from './components';


export default function App() {
  // Their name, music type and an introduction paragraph.
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

  return (
    <>
      <header>Ghost 👻</header>
      <span>Hard rock, heavy metal, doom metal, pop rock, progressive rock, psychedelic rock</span>
      <p>Ghost is a Swedish rock band that was formed in Linköping in 2006. In 2010, they released a three-track demo followed by a 7-inch vinyl titled "Elizabeth", and later their debut full-length album Opus Eponymous. The song "Ritual" was chosen by Kerrang! as one of "The 50 Most Evil Songs Ever."</p>
      <Discography albums= { albums } setLikedMusic={ setLikedMusic }/>
    </>
  )
}
