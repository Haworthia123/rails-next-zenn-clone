import { Button } from '@mui/material'
import type { NextPage } from 'next'

const HelloMui: NextPage = () => {
  return (
    <>
      <Button>Hello Mui@v5!</Button>
      <Button variant="contained">Hello Mui@v5!</Button>
      <Button variant="outlined">Hello Mui@v5!</Button>
    </>
  )
}

export default HelloMui
