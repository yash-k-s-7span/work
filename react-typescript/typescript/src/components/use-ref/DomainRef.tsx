import React, { useEffect, useRef } from 'react'

const DomainRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!);
    useEffect(() => {
        inputRef.current?.focus();
    },[])
    const handleClick = () => {
        console.log(inputRef.current?.value);
    }
  return (
    <div>

        <input type='text' ref={inputRef} placeholder='Input here'/>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default DomainRef