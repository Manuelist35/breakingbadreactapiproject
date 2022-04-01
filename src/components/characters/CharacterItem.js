import React from 'react'

const CharacterItem = ({ item/*we are getting this item from the CharacterGrid component which will allow us to create the desired content inside this element */}) => {
    return (
        <div className='card'>
          <div className='card-inner'>
            <div className='card-front'>
              <img src={item.img} alt='' />
            </div>
            <div className='card-back'>
              <h1>{item.name}</h1>
              <ul>
                <li>
                  <strong>Actor Name:</strong> {item.portrayed}
                </li>
                <li>
                  <strong>Nickname:</strong> {item.nickname}
                </li>
                <li>
                  <strong>Birthday:</strong> {item.birthday}
                </li>
                <li>
                  <strong>Status:</strong> {item.status}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
}

export default CharacterItem