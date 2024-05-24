import React from 'react'

type SimpleButtonProps = {
  text: string
  onClick: () => void
}

const SimpleButton: React.FC<SimpleButtonProps> = (props) => {
  const handleOnClick = () => {
    console.log('Clicked!')
  }

  return <button onClick={handleOnClick}>{props.text}</button>
}

export default SimpleButton
