import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.currentSushi.map(sushi => <Sushi sushi={sushi} key={sushi.id} eatSushi={props.eatSushi} isSushiEaten={props.isSushiEaten}/>)
        }
        <MoreButton fourSushi={props.fourSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
