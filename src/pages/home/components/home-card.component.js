import React from 'react'
import './home-card.styles.scss';

import userImage from '../../../images/user.jpg'

const HomeCard = ({ user }) => {
  return (
    <div className="card">
      { console.log(user) }      
      <div className="additional">
        <div className="user-card">
          <img className="user-image center" src={userImage} alt="Profile" />
        </div>
        <div className="more-info">
          <h1>{user.name}</h1>

          <div className="coords">
            <span>Group Name</span>
            <span>Joined January 2021</span>
          </div>
          <div className="coords">
            <span>Psychic Medium</span>
            <span>Something</span>
          </div>

          <div className="stats">
            <div className="title">Rating</div>
            {[...Array(user.rating)].map((star) => {
              return (
                <i className="fas fa-star"></i>
              )
            })}
          </div>
        </div>
      </div>

      <div className="general">
        <h1>{user.name}</h1>
        <p>{user.short_description}</p>
        {/* { user.skills.map((skill) => {
          return (
            <span className="badge">{skill}</span>
          )
        }) } */}
        <span className="more">Mouse over for more info</span>
      </div>

    </div>
  )
}

export default HomeCard;