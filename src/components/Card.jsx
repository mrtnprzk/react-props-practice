import React from 'react'
import Avatar from './Avatar'
import Info from './Info'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <p>{props.id + 1}</p>
          <h2 className='heading name'>{props.name}</h2>
          <Avatar img={props.img}/>
        </div>
        <div className="bottom">
            <Info detailInfo={props.num}/>
            <Info detailInfo={props.email}/>
        </div>
      </div>
    </div>
  )
}

export default Card