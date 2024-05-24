import React from 'react'

const SimpleButton: React.FC = () => {
+ const handleOnClick = () => {
+   console.log('Clicked!')
+ }

- return <button>Click Here</button>
+ return <button onClick={handleOnClick}>Click Here</button>
}

export default SimpleButton