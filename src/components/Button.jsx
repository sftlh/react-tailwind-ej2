import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'

const Button = ({width,bgColor, color, size, bgHoverColor, text, borderRadius}) => {
  const {setIsClicked, initialState} = useStateContext();
  return (
    <button onClick={()=> setIsClicked(initialState)} type='button' style={{backgroundColor: bgColor, color, borderRadius}} className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:drop-shadow-xl hover:bg-${bgHoverColor}`}>
      {text}
    </button>
  )
}

export default Button
