import React from 'react'

const MoreButton = ({nextSushi}) => {
    // return <button onClick={/* Fill me in! */ null}>
    //event triggered happens in state, lives in sushicontainer
    return <button onClick={nextSushi}>
            More sushi!
          </button>
}

export default MoreButton