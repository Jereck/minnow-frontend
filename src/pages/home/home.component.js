import React from 'react'
import HomeCard from './components/home-card.component';

import './home.styles.scss'


function Home() {
  const user1 = {
    name: 'Hugh Jass',
    rating: 4,
    description: 'This is a much longer description about who I am and how I read cards.',
    skills: ['Cartomancy', 'Tarot', 'Clairvoyant', 'Clairsentient', 'Pendulum']
  }

  const user2 = {
    name: 'Ben Dover',
    rating: 5,
    description: 'This is a much longer description about who I am and how I read cards.',
    skills: ['Cartomancy', 'Tarot', 'Clairvoyant', 'Clairsentient', 'Pendulum']
  }

  const user3 = {
    name: 'Phil McKraken',
    rating: 2,
    description: 'This is a much longer description about who I am and how I read cards.',
    skills: ['Cartomancy', 'Tarot', 'Clairvoyant', 'Clairsentient', 'Pendulum']
  }
  

  return (
    <>
      <div className='hero-image'>
        <p className="hero-text">Minnow Pond Tarot</p>
      </div>
      <h1 style={{ textAlign: 'center', fontWeight: 100, fontSize: '3em' }}>Readers</h1>
      <hr style={{ width: '80%' }} />
      <div style={{ display: 'flex' }}>
        <HomeCard user={user1} />
        <HomeCard user={user2} />
        <HomeCard user={user3} />
      </div>
    </>
  )
}

export default Home
