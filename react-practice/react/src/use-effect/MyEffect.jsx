import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const MyEffect = () => {
    const [count,setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        },1000)
    })
    return (
    <>
        <h1>Page render {count} times</h1>
    </>
  )
}

export default MyEffect