import { useState, useEffect, useCallback } from 'react';

export const Example = () => {
  const [count, setCount] = useState(0);

  /* 
    By declaring logCount with useCallback and including count as a dependency, 
    you ensure that logCount is re-created whenever count changes, and it always captures the latest value.
   */

  const logCount = useCallback(() => {
    console.log('Current count:', count);
  }, [count]); // Dependency ensures `logCount` is updated whenever `count` changes.

  useEffect(() => {
    const interval = setInterval(() => {
      logCount(); // Calls the updated `logCount` with the latest count
    }, 1000);

    return () => clearInterval(interval);
  }, [logCount]); // Dependency ensures effect runs whenever `logCount` changes.

  return (
    <div className='text-center mt-20'>
      <p className='h4'>Count: {count}</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className='bg-slate-500 p-2 rounded-md text-white mt-4'
      >
        Increment
      </button>
    </div>
  );
};

export default Example;
