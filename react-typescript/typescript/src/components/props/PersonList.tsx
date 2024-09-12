import { Name } from './style-props/PersonTypes'
// type PersonList = {
//   names:{
//     first:string,
//     last:string
//   }[]
//}
type PersonList = {
  names:Name[]
}

import React from 'react'

const PersonList = (props:PersonList) => {
  return (
    <div>
        {props.names.map((item,index) => {
          return(
            <div key={index}> 
              <h2>{item.first}</h2>
              <h2>{item.last}</h2>
            </div>
          )
        })}
    </div>
  )
}

export default PersonList