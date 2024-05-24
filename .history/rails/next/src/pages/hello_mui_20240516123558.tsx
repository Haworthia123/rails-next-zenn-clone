import { css } from '@emotion/react'
import { Button } from '@mui/material'
import type { NextPage } from 'next'

const buttonCss = css({
  padding: '24px',
})

const HelloMui: NextPage = () => {
  return (
    <>
      <Button>Hello Mui@v5!</Button>
      <Button
        variant="contained"
        sx={{ p: 6, ml: 2, mt: 3, color: 'white', textTransform: 'none' }}
      >
        Hello Mui@v5!
      </Button>
      <Button variant="outlined">Hello Mui@v5!</Button>
      <Button variant="contained" color="error">
        Hello Mui@v5!
      </Button>
      <Button
        variant="contained"
        sx={{
          p: 6,
          ml: 2,
          mt: 3,
          color: { xs: 'white', md: 'red' },
          textTransform: 'none',
        }}
      >
        Hello Mui@v5!
      </Button>
    </>
  )
}

export default HelloMui
