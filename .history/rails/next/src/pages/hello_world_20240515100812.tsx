import type { NextPage } from 'next'

const HelloWorld: NextPage = () => {
  const count = 100
  return <div>Hello World! / {count}</div>
}
//このファイルを外部ファイルから読み込んだ時は、HelloWorldという関数を読み込んだものとみなす
export default HelloWorld
