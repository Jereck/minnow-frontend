import React from 'react'
import { useQuery, gql } from '@apollo/client'

import HomeCard from './components/home-card.component';

import './home.styles.scss'

const USERS = gql`
  query {
    findUsers {
      id
      firstName
      lastName
      userName
    }
  }
`

function Home() {  
  const { loading, error, data } = useQuery(USERS);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }

  return (
    <>
      <div className='hero-image'>
        <p className="hero-text">Minnow Pond Tarot</p>
      </div>
      <h1 style={{ textAlign: 'center', fontWeight: 100, fontSize: '3em' }}>Readers</h1>
      <hr style={{ width: '80%' }} />
      {/* <Container>
        <Row>
          { data.findUsers.map(( user ) => (
            <Col xs="3">
              <HomeCard user={user} />
            </Col>
          ))}
        </Row>
      </Container> */}
      <div>
        
      </div>
    </>
  )
}

export default Home
