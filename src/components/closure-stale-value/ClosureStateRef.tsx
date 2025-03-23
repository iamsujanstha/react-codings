import { useState, useEffect } from 'react';

export const Example = () => {
  const [count, setCount] = useState(0);

  const logCount = () => {
    console.log('Current count:', count); // Logs the count captured at function creation
  };

  /* 
  The issue of stale closures happens when a function is used 
  as a reference (e.g., passed to an event listener, setInterval, or a callback), 
  and it "remembers" the state from when it was first created.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      logCount(); // Calls the "stale" logCount
    }, 1000);

    return () => clearInterval(interval);
  }, []); // logCount is not a dependency!

  return (
    <div className='text-center mt-20'>
      <p className='h4'>count {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)} className='bg-slate-500 p-2 rounded-md text-white mt-4'>Increment</button>
    </div>
  );
};

export default Example