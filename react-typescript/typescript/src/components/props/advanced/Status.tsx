
//Advanced Props
import React from 'react'

type StatusProps = {
    status:'Loading' | 'Success' | "Error"
}
const Status = (props:StatusProps) => {
    let message;
    if(props.status === 'Loading'){
        message = 'Loading ⛔'
    }else if(props.status === 'Success'){
        message = 'Data fetched ���'
    }
    else if(props.status === 'Error'){
        message = 'Error fetching 👾'
    }
    // else{
    //     message = '🐉'
    // }
  return (
    <div>
        <h2>Status {message}</h2>
    </div>
  )
}

export default Status