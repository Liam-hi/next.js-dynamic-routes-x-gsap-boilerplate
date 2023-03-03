import React from 'react'



export default function Regan(props) {
    const populateData = props.x.map(x =>
        <li> { x } </li>
);
  return (
    <div>
      { populateData }
    </div>
  )
}

