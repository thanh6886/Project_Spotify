import React, { useContext } from 'react'
import { Songs } from '../context';

function SongDetail() {
  const {song}  = useContext(Songs)
  return (
    <div className='col-span-1'>
         <h2 className='text-blue-400 font-bold '>Now Playing</h2>
        <h2 className='text-blue-200 font-bold '>{song.name}</h2>

        <div className='w-[240px] m-auto mt-10'>
          <img  className=' w-[240px] h-[240px] m-auto mt-3 rounded-[45%]' src={song.links.images[0].url} alt='avatar' ></img>
        </div>
    </div>
  )
}

export default SongDetail;