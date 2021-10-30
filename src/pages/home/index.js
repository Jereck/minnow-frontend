import React from 'react'

import './home.styles.scss'

const Home = () => {  
  return (
    <>
      <div className='hero-image'>
        <p className="hero-text">Minnow Pond Tarot</p>
      </div>
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 25 }}>
          <h1 style={{ fontWeight: 100, fontSize: '3em' }}>Featured Blogs</h1>
          <hr style={{ width: '80%' }} />
        </div>


      </div>
    </>
  )
}

export default Home
