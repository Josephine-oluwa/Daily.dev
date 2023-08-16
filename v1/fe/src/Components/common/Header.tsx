import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full h-[80px] flex justify-center items-center bg-yellow-300'>
      <div className='w-[70%] justify-center items-center  h-[100%] '>
    <div className='text-[30px] m-5 font-bold flex justify-between'>Stay Fresh 
  
    <div className='w-[30vw]  flex justify-between font-normal text-[20px]'>
    <Link to={'Write'} >
      <span className='text-[25px] '> Drop </span>
    </Link>
    <Link to={'read'} >
      <span className='text-[25px] '> Read </span>
    </Link>
    <Link to={'sign-in'} >
      <span className='text-[25px] '> Sign in</span>
    </Link>
    <Link to={'register'} >
      <span className='text-[25px] '> Get Started</span>
    </Link>
    </div>

    </div>
    </div>
    </div>
    
      
   
  )
}

export default Header