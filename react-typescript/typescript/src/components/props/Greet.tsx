type GreetProps = {
    name:string,
    messageCount?:number,
    isLoggedIn?:boolean
}

import React from 'react'

const Greet = (props:GreetProps) => {
  const {messageCount = 0} = props;
  return (
    <div>
       {props.isLoggedIn ?`Greet ${props.name} you have ${messageCount}  messages` : 'Welcome Guest'} 
    </div>
  )
}

export default Greet