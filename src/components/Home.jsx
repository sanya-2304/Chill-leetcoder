import React from 'react'

const Home = () => {
  return (
    <div className='flex '>
      <div >
        <h1 className='text-4xl text-orange-300'>Are you a chill leetcoder?</h1>
        <h2>Chill leetcoder Analyser</h2>
        <input type="text" placeholder='Enter you leetcode username'/>
        <br />
        <button>Analyze</button>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Home
