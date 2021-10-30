import React from 'react'

import { Container, Tabs, Tab} from 'react-bootstrap';
import Earnings from './components/earnings.component';
import Listing from './components/listing.component';
import Profile from './components/profile.component';

function User() {
  return (
    <div>
      <Container className="mt-5">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="profile" title="Profile">
            <Profile />
          </Tab>
          <Tab eventKey="listing" title="Listing">
            <Listing />
          </Tab>
          <Tab eventKey="earnings" title="Earnings">
            <Earnings />
          </Tab>
        </Tabs>
      </Container>
    </div>
  )
}

export default User
