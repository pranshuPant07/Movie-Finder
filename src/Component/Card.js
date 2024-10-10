import React from 'react'
import '../Component/Card.css'

 function Card(props) {

  return (
    <div className='main1'>
      <div className="subclass1">
        <div className="sub">
          <div className="poster">
            <img src={props.data.Poster} alt="" />
          </div>
          <div className="data">
            <h5>Title:{props.data.Title}</h5>
            <h6>Year of release:{props.data.Year}</h6>
            <button>favorite</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
