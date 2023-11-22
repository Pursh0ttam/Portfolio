import React, { useState } from 'react'

const Home2 = () => {
    const arr=[
        {
        id:1,
        link:'Github'
    },
    {
        id:2,
        link:'FaceBook'
    },
    {
        id:3,
        link:'InstaGram'
    },
]
  return (
    <div>
      {arr.map(({id,link})=>(
       <li key={id}> {link} </li>

      ))}
    </div>
  )
}

export default Home2
