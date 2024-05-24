import React from 'react'

const SimpleButton: React.FC = () => {
  const handleOnClick = () => {
    console.log('Clicked!')
    alert()
  }
  return <button onClick={handleOnClick}>Click Here</button>
}

export default SimpleButton
