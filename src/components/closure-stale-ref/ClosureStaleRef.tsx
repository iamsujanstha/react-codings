import { useState, useCallback, useRef } from 'react';
import Expensive from './ExpensiveComponent';
import { useNavCollapsed } from '../../contexts/nav-context';

export default function ClosureStaleRef() {
  const collapsed = useNavCollapsed();
  const [value, setValue] = useState('');
  const [sendValue, setSendValue] = useState('');
  const valueRef = useRef<string>(value);

  valueRef.current = value;

  const handleSend = useCallback(() => {
    setSendValue(valueRef?.current);
  }, []);

  console.log(sendValue, 'sendValue', { collapsed });
  return (
    <>
      <input
        type='text'
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        className='border-2 border-slate-500 p-2 rounded-md'
      />
      <Expensive clickHandler={handleSend} />
    </>
  );
}

/* Use useRef to store the latest value without causing re-renders, 
  and use useCallback([]) to keep handleSend stable. 
  */