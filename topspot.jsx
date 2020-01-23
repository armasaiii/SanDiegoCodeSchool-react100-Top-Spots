import React from 'react';



export default props => (
    <div className='well'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <a href={`https://maps.google.com/?q=${props.location[0]}, ${props.location[1]}`}> Click here for directions </a>
  </div>            
)

//href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`