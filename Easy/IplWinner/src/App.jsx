import React from 'react'
import { useState } from 'react';

const teams = [
  { id: 1, name: 'Chennai Super Kings' },
  { id: 2, name: 'Mumbai Indians' },
  { id: 3, name: 'Royal Challengers Bangalore' },
  { id: 4, name: 'Kolkata Knight Riders' },
  { id: 5, name: 'Sunrisers Hyderabad' },
  { id: 6, name: 'Delhi Capitals' },
  { id: 7, name: 'Rajasthan Royals' },
  { id: 8, name: 'Lucknow Super Giants' },
  { id: 9, name: 'Gujarat Titans' },
];



function App() {

  const [winner, setWinner] = useState('');

  function handleRandom() {
    const random = Math.floor(Math.random() * teams.length)
    setWinner(random);
  }


  return (
    <div className="font-sans bg-gray-100 flex-col h-screen">
      <div className="flex flex-wrap justify-center p-4">
        {teams.map((team, index) => (
          <div key={index} className="w-72 m-4 p-6 text-center bg-white border border-gray-200 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h2 className="mt-4 text-xl font-semibold">{team.name}</h2>
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-5 ' onClick={handleRandom} >
        <button className='border-2 pr-4 pl-4 bg-green-400 p-2 rounded-xl  font-bold'>
          Generate Winner
        </button>
        <div>
        </div>
      </div>

      <div className='flex justify-center  mt-5 bg-green-400 p-4'>
        {teams.map((team, index) => (

          <div className='text-6xl text-white'>
                 { winner === index ? team.name :"" }
                
          </div>

        ))}
      </div>
    </div>
  )

}

export default App