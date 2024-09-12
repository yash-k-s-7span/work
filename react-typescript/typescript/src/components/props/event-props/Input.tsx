import React from 'react'

type InputProps = {
    value:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>) => void,
}
// const Input = (props:InputProps) => {

//     const HandleChangeText = (event:React.ChangeEvent<HTMLInputElement>) => {
//         props.handleChange(event)
//         console.log(event)
//     }
//   return (
//     <div>
//         <input type="text" value={props.value} onChange={HandleChangeText} />
//         {/* onChange={props.handleChange}  passing as a props*/}
//     </div>
//   )
// }
const Input = ({value,handleChange}:InputProps) => {

    const HandleChangeText = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
  return (
    <div>
        <input type="text" value={value} onChange={handleChange} />
        {/* onChange={props.handleChange}  passing as a props*/}
    </div>
  )
}

export default Input