import { useState, useCallback } from 'react';
import Expensive from './ExpensiveComponent';

export default function Problem() {
  const [value, setValue] = useState('');
  const [sendValue, setSendValue] = useState('');

  const handleSend = useCallback(() => {
    console.log(value, 'value');
    setSendValue(value);
  }, []);

  console.log(sendValue, 'sendValue');
  return (
    <>
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
        className='border-2 border-slate-500 p-2 rounded-md'
      />
      <Expensive clickHandler={handleSend} />
    </>
  );
}