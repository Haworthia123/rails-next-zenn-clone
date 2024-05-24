import type { NextPage } from 'next'

const HelloWorld: NextPage = () => {
  return <div>Hello World!</div>
}
//このファイルを外部ファイルから読み込んだ時は、HelloWorldという関数を読み込んだものとみなす
export default HelloWorld
