import React from 'react'
import { userContext } from '../../App'

function UseContextExOne() {


  return (
    <userContext.Consumer>
        {
            value => {
                return  <h1>{value.username}</h1>
            }
        }
    </userContext.Consumer>
   
  )
}

export default UseContextExOne