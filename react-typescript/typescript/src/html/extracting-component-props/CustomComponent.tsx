import React from 'react'
import Greet from '../../components/props/Greet'

const CustomComponent = (props:React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

export default CustomComponent