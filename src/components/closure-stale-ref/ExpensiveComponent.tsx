import React from 'react';
import { useNavToggle } from '../../providers/NavProvider';
// import { useNav } from '../../hooks/useNav';

const Expensive = ({ clickHandler }: { clickHandler: () => void }) => {
  const toggle = useNavToggle();
  console.log('expensive');
  return (
    <>
      <button onClick={clickHandler}>send</button>
      <button className='bg-purple-500' onClick={toggle}>Close Sidebar</button>
    </>
  )
};

export default React.memo(Expensive);
