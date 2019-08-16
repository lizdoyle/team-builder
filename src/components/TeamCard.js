import React from 'react';

const TeamCard = props => {

  return (
    <div>
      {props.character.map(char => {
          return (
              <div className="card" key="name">
                <h3>{char.id} </h3>
                <h2> {char.name}</h2>
                 <p> {char.status}</p>
                <p> {char.species}</p>
                <p> {char.gender}</p>
                <p> {char.origin}</p>
                <p> {char.created}</p>
                <p> {char.location}</p>
              </div>


          )


      })}


    </div>
  )
}

export default TeamCard
