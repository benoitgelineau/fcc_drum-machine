import React from 'react';

export const Volume = ({ value, onChange }) =>
  <div className="slidecontainer">
    <input
      type="range"
      min="1"
      max="100"
      value={value}
      onChange={onChange}
      className="sliderVol"
      id="volume" />
  </div>
