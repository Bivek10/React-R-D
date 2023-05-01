import React, { useContext } from 'react'
import { userContext } from '../../App'

function UseContextExTwo() {

const user = useContext(userContext)

  return (
    <div>hello: {user.username}</div>
  )

}

export default UseContextExTwo