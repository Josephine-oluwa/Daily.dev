import React from 'react'
import vid from "../../assets/vid.mp4"
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <div className='w-full flex  relative items-center h-[calc(80vh-70px)] bg-slate-400 justify-center flex-col'>
      <video src={vid} autoPlay muted loop className='relative h-[100%] w-full object-cover'/>
      
      <div className='  h-full w-full bg-[rgba(0,0,0,0.65)] flex items-center text-[60px]  
      justify-center   absolute text-white font-extrabold ' > STAY FRESH ALWAYS
         <Link to={'register'} >
      <span className=' h-12 w-40 text-[14px] font-normal  bg-yellow-300 text-black rounded'> Get Started</span>
    </Link>
        </div>
      </div>
    

        
   
  )
}

export default HomeScreen


 {/* <div className='text-[20px] '> where you get everything you need to stay fresh

      </div> */}