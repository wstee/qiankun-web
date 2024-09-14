export default function Home() {
  const handleClick = <T,>(s: T) => {
    alert(s)
    
  }
  const ht = '<span>哈哈，这是html</span>'
  const arr = [1, 2, 3, 4, 5]
  return (<>
    <h1>qiankun-sub-vite-react</h1>
    <h2 dangerouslySetInnerHTML={{ __html: ht}} ></h2>
    <button onClick={() => handleClick<string>('你好呀！')}>Click Me!</button>

    <ul>
      {
        arr.map((item) => (<li key={item}>{item}</li>))
      }
    </ul>
  </>)
}