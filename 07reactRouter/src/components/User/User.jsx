import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} =useParams();
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>
      <h1>User:{userId}</h1>
    </div>
  )
}

export default User
