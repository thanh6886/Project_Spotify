import React, { useContext, useEffect, useState } from 'react'
import { Songs } from '../context'




export default function ListSong() {
  const {data, song, handlSetsong} = useContext(Songs)
  const [idSong, setIdSong] = useState(0)


  const hanldClick = (Song)=>{

       setIdSong(Song)  // idSong === Song  === songs.id
      handlSetsong(Song)
  }

  useEffect(()=>{
      setIdSong(song.id)
  }, [song])
  return (
    <div className='col-span-1  overflow-y-scroll'>      
          <table className='table-auto w-full'>
             <thead className='text-white h-12'>
              <tr>
                 <th className='w-[10%]'>#</th>
                 <th className="">Titel</th>
                 <th className="w-[10%]">Author</th>
                 <th className="w-[10%]" 
                 ><i className="fa fa-download" aria-hidden="true"></i></th>
              </tr>
             </thead>
             <tbody>
              {
                data.map((element, index)=>{
                     return(
                      <tr 
                      key={index}
                      className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${idSong === element.id && 'bg-slate-600 text-teal-400'}`} 
                      onClick={()=>
                            hanldClick(element.id)
                      }  

                      >
                      <td className=' text-center'>{index + 1}</td>
                      <td className='  text-center'>{element.name}</td>
                      <td className=' text-center '>{element.author}</td>
                      <td className=' text-center '>
                        <a href={element.url}>
                          <i className="fa fa-download" aria-hidden="true"></i>
                        </a>
                        </td>
                    </tr>
                     )
                })
              }
             </tbody>

          </table>
    </div>
  )
}
