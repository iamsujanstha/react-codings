import { useState } from "react"
import './style.css'


const THRESHOLD = 40;
const InfiniteScrolling = () => {
  const [data, setData] = useState([...new Array(40)]);
  const [loading, setLoading] = useState(false);

  async function handleScroll(e: React.UIEvent<HTMLDivElement>) {
    const { scrollTop, clientHeight, scrollHeight } = e.target as HTMLDivElement;
    const remainingHeight = scrollHeight - (scrollTop + clientHeight);

    if (remainingHeight < THRESHOLD) {
      setLoading(true)
      await loadMore();
    }
  }

  async function loadMore() {
    await new Promise((resolve) => setTimeout(resolve, 1000)) // wait for 1 sec then only execute next line
    setData((prev) => [...prev, ...new Array(10)])
    setLoading(false)
  }

  return (
    <div onScroll={handleScroll} className="scroll-height-container">
      {data.map((_, index) => {
        return (
          <div className="row" key={index}>
            {index + 1}
          </div>
        )
      })}
      {loading && <p>Loading...</p>}
    </div>
  )
}

export default InfiniteScrolling