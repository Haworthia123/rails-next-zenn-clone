import type { NextPage } from 'next'
//'@はルートパスを表しているnext/src/と同義
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
