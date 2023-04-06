import { Home, About, Music } from './pages';
import './App.css';
import { NavBar } from './components';
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import { AlbunsProvider } from './contexts';


export default function App() {
  // Their name, music type and an introduction paragraph.

  return (
    <AlbunsProvider>
      <Routes>
        <Route path='/' element={<NavBar />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/music' element={ <Music /> } />
        </Route>
          <Route path='*' element={<h1>404 Not Found</h1>}>
          </Route>
      </Routes>
    </AlbunsProvider>
  );
};


// {<Discography albums= { albums } setLikedMusic={ setLikedMusic }/>}