import { useState } from 'react';
import './PigFace.css'

const PigFace = () => {
  const [value, setValue] = useState(50);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    document.documentElement.style.setProperty('--head-size', `${newValue * 4}px`);
  }


  return (
    <div>
      <div className="pig-head">
        <div>
          <div className="ear" />
          <div className="ear" />
        </div>
        <div>
          <div className="eye" >
            <div className="pupil" />
          </div>
          <div className="eye" >
            <div className="pupil" />
          </div>
        </div>
        <div className="nose">
          <div className="nostril" />
          <div className="nostril" />
        </div>
      </div>
      <label>Size</label>
      <input type='range' onChange={handleChange}></input>
      <p>{value * 4}px</p>
    </div>
  )
}

export default PigFace