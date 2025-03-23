import { useEffect, useRef, useState } from 'react'


const ObserverInfiniteScroll = () => {
  const [data, setData] = useState([...new Array(40)]);
  const [loading, setLoading] = useState(false);
  const lastElementRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    // Check if the reference to the last element exists
    if (!lastElementRef.current) return;
    // If it's null, return early to avoid errors.

    // Create a new Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        console.log({ entries })
        const lastEntry = entries[0]; // Get the first (and only) observed entry

        if (lastEntry.isIntersecting && !loading) {
          // Check if the last element is in the viewport and not already loading
          loadMore();
        }
      },
      { threshold: 0.1 } // Observer triggers when the 10% element is visible
    );

    // Start observing the last element in the list
    observer.observe(lastElementRef.current);

    // Cleanup function to disconnect the observer when the component unmounts 
    // or when dependencies change to prevent memory leaks.
    return () => observer.disconnect();

  }, [data.length, loading])

  function handleScroll() {

  }

  async function loadMore() {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setData((prev) => [...prev, ...new Array(10)]);
    setLoading(false)
  }

  return (
    <div onScroll={handleScroll} className="scroll-height-container">
      {data.map((_, index) => {
        return (
          <div
            ref={index === data.length - 1 ? lastElementRef : null}
            className="row"
            key={index}
          >
            {index + 1}
          </div>
        )
      })}
      {loading && <p>Loading...</p>}
    </div>
  )
}

export default ObserverInfiniteScroll