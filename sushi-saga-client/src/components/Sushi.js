import React, { Fragment } from 'react'

const Sushi = ({name, img_url, id, price, eatSushi, eaten}) => {
  // const eatSushi = () => {}  // in onClick below
  return (
    <div className="sushi" >
      <div className="plate"
          onClick={()=> eatSushi(id, price)}> 
          {/* use arrowFn when passing in parameters, 
          else invokes eatSushi*/}
        { 
        eaten ? null : <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi