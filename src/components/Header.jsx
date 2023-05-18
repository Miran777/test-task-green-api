import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({logout}) => {
  return (
    <div className='flex w-full border-b'>
        <Link className='basis-1/2 bg-green-200 py-4 flex justify-center text-2xl' to='chat'><h2>chat</h2></Link>
        <Link className='basis-1/2 bg-blue-200 py-4 flex justify-center text-2xl' to='/'><h2>data</h2></Link>
    </div>
  )
}

export default Header