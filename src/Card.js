import React from 'react'


// update ..

const Card = ({ name,email,id }) => {
  return (
    <div className='CardContent'>
        <img alt='robots' src={`https://robohash.org/${id}?100x100`}/>
        <div>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    </div>
  );
}

export default Card;