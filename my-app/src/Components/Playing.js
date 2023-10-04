import React, { useContext }  from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../context';

 function Playing() {
  const {song ,  handlSetsong, data, _iD}   = useContext(Songs)
  const hanldClickNext = ()=>{
      handlSetsong(_iD + 1)
  }

  const  hanldClickPre = ()=>{
    console.log(song.id)

    handlSetsong(_iD  - 1)    
  }

  
  return (
        <div className='h-auto'>
            <AudioPlayer
             className="player-music"
            src={song.url}
            showSkipControls={true}
            

            onClickNext={hanldClickNext}
            onClickPrevious={hanldClickPre}
            onEnded={hanldClickNext}
            />
            
        </div>
  )
}

export default Playing