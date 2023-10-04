
import './App.css';
import Navbar from './Components/Navbar';
import ListSong from './Components/ListSong';
import SongDetail from './Components/SongDetail';
import Playing from './Components/Playing';
import React, { useState } from 'react'
import { Songs } from './context';
import data from './data/data.json'
function App() {
  const [_iD, setId] = useState(0)
  const [song, setSongs] = useState(data[_iD])
  const handlSetsong =(idSong)=>{   // nhận vào id bài hát 
            setId(idSong)
            setSongs(_iD)
  }
  return (
      <div className='App'>
        <Songs.Provider value={{data, song , handlSetsong, _iD}}>
        <Navbar/>
            <div className="grid grid-cols-2 bg-slate-700 overflow-hidden " id='body_1' >
              {/* span 1*/}
              <SongDetail/>
                {/* span 2*/}
              <ListSong/>         
             </div>
        <Playing/> 
        </Songs.Provider>
      </div>
)
}

export default App;
