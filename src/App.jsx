// import { useState } from 'react'
// import './App.css'


// function App() {
//   // Their name, music type and an introduction paragraph.
//   const [description, setDescription] = useState({})

//   // A list of their songs/albums including name,release date and cover art.
//   let bandDetails = {};
//   bandDetails = {
//     "name": "Ghost 👻",
//     "music type": "heavy metal",
//     "description": "Ghost is a Swedish rock band that was formed in Linköping in 2006"
//   };

//   function handleDescription() {
//     setDescription({
//       ...description,
//       bandDetails
//     });
//   }

//   return (
//     <>
//     <header onClick={handleDescription}>Music App: {description.bandDetails.name}</header>
//     <span>{description.bandDetails["music type"]}</span>
//     <p>{description.bandDetails.description}</p>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import Albums from './Albums.jsx';
import './App.css';


export default function App() {
  // Their name, music type and an introduction paragraph.

  return (
    <>
    <header>Ghost 👻</header>
    <span>Hard rock, heavy metal, doom metal, pop rock, progressive rock, psychedelic rock</span>
    <p>Ghost is a Swedish rock band that was formed in Linköping in 2006. In 2010, they released a three-track demo followed by a 7-inch vinyl titled "Elizabeth", and later their debut full-length album Opus Eponymous. The song "Ritual" was chosen by Kerrang! as one of "The 50 Most Evil Songs Ever."</p>
    <Albums />
    </>
  )
}

