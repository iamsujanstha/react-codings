import React, { useState } from 'react'
/* 
 ** When left mouse button click
  - draw a circle
  - increase the circle size on drag
  - on mouse leave => the final circle
  - if left click without drag then clear left circle

  ** When right mouse button click
  - draw a circle
  - increase the circle size on drag
  - on mouse leave => the final circle
  - if right click without drag then clear right circle

  ** Cicle overlap
   - initially both circles are red
   - if overlap then second cirlce should change to blue
 */

const handleContextMenu = (e: React.MouseEvent) => {
  e.preventDefault();
}

const OperlappingCircles = () => {
  const [circles, setCircles] = useState([
    {
      id: 'left',
      width: 0,
      height: 0,
      startX: 0,
      startY: 0,
      x: 0,
      y: 0
    },
    {
      id: 'right',
      width: 0,
      height: 0,
      startX: 0,
      startY: 0,
      x: 0,
      y: 0
    }
  ])

  // useEffect(() => {
  //   document.addEventListener('contextmenu', handleContextMenu)

  //   return () => document.removeEventListener('contextmenu', handleContextMenu)
  // }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    const { button } = e;
    const currentId = button === 0 ? 'left' : 'right';
  }

  return (
    <div onMouseDown={handleMouseDown} onContextMenu={handleContextMenu}>OperlappingCircles</div>
  )
}

export default OperlappingCircles