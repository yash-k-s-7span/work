import React from 'react'

type HandleClick = {
    buttonClick: (event:React.MouseEvent<HTMLButtonElement>,id:number) => void;
}
const Button = (props:HandleClick) => {
  return (
    <div>
        <button onClick={(event) => props.buttonClick(event,11111)}>button</button>
    </div>
  )
}

export default Button