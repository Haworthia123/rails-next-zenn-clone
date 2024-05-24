import type { NextPage } from 'next'
//'@はルートパスを表している
import SimpleButton from '@/components/SimpleButton'

const HelloWorld: NextPage = () => {
  return (
    <>
      <h1>Title</h1>
      <p>content</p>
      <SimpleButton />
    </>
  )
}

export default HelloWorld
