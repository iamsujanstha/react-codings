import clsx from 'clsx';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const Shape = ({ data }: { data: Array<Array<number>> }) => {
  const [selected, setSelected] = useState(new Set());
  const [unloadSelected, setUnloadSelected] = useState(new Set());
  const [unloading, setUnloading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [stop, setStop] = useState(false);

  const boxItem = useMemo(() => data.flat(Infinity), [data]);
  const countOfVisibleBoxes = useMemo(() => boxItem.filter(item => item === 1).length, [boxItem]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const index = target.getAttribute('data-index');
    const status = target.getAttribute('data-status');

    if (index === null || status === 'invisible' || selected.has(index) || unloading) return;

    setSelected((prev) => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  };

  const load = useCallback(() => {
    const keys = Array.from(unloadSelected);
    /* 
      Using forEach would process all elements in a collection immediately and synchronously. 
      If you want to delay the processing of each element (e.g., adding them back one by one at fixed intervals like 500ms), 
      forEach is not suitable because it doesn't provide a mechanism for adding delays between iterations. 
      Here's why we use the recursive setTimeout approach instead:
    */
    const addNextKey = () => {
      if (keys.length > 0) {
        const currentKey = keys.shift(); // Remove the first element
        setSelected((prev) => {
          const newSet = new Set(prev);
          newSet.add(currentKey);
          return newSet;
        });

        timerRef.current = setTimeout(addNextKey, 500);
      } else {
        // All items added, clean up
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
      }
      setStop(true);

    };

    // Start the loading process
    timerRef.current = setTimeout(addNextKey, 500);
  }, [unloadSelected]);


  const unload = useCallback(() => {
    setUnloading(true);
    const keys = Array.from(selected.keys());
    setUnloadSelected(new Set([...keys]));

    const removeNextKey = () => {
      if (keys.length > 0) {
        const currentKey = keys.shift(); // Remove the first element
        setSelected((prev) => {
          const updatedKeys = new Set(prev);
          updatedKeys.delete(currentKey);
          return updatedKeys;
        });

        // Schedule the next call
        timerRef.current = setTimeout(removeNextKey, 500);
      } else {
        // All items removed, clean up
        setUnloading(false);
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }

        // Call `load` after unload completes
        load();
      }
    };

    // Start the removal process
    timerRef.current = setTimeout(removeNextKey, 200);
  }, [selected, load]);


  useEffect(() => {
    if (selected.size >= countOfVisibleBoxes && !stop) {
      unload();
    }
  }, [countOfVisibleBoxes, selected.size, stop, unload]);

  return (
    <main className="grid grid-cols-3 w-fit gap-4 m-auto mt-20" onClick={handleClick}>
      {boxItem.map((box, index) => {
        const status = box === 0 ? 'invisible' : 'visible';
        const isSelected = selected.has(index.toString());
        return (
          <div
            key={`${box}-${index}`}
            className={clsx('border border-black w-20 h-20 cursor-pointer transition ease-in-out delay-250', status, { 'bg-green-800': isSelected })}
            data-index={index}
            data-status={status}
          />
        );
      })}
    </main>
  );
};

export default Shape;


/* e.target refers to the actual element that triggered the event.
   e.currentTarget refers to the element on which the event listener is attached(<main> in this case). 
*/