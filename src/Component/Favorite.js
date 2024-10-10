import React from 'react'
import '../Component/Favorite.css'

function Favo(props) {
  var mov = props.props.favorites
  console.log(mov)
  return (
    <div className='main12'>
      {
        mov.length> 0 ? (mov.map((e, index) => (
          <div className="subclass1">
            <div className="sub">
              <div className="poster">
                <img src={e.Poster} alt="" />
              </div>
              <div className="data">
                <h6>Title: {e.Title}</h6>
                <h6>Year of release:{e.Year}</h6>
              </div>
            </div>
          </div>
        ))): (
          <div className='notFound'>
            <h5>NO FAVORITE MOVIE IS FOUND</h5>
          </div>
      )
      }
    </div>
  )
}

export default Favo