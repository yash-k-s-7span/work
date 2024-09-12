import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
const Box = () => {
    const theme = useContext(ThemeContext)
  return (
    <div style={{backgroundColor:theme.primary.main}}>
      <span style={{backgroundColor:theme.primary.text,fontSize:'1.5em'}}>Theme</span> Context
        <h2 style={{backgroundColor:theme.secondary.main}}>Context <span style={{backgroundColor:theme.secondary.text}}>Demo</span></h2>
      </div>
  )
}

export default Box