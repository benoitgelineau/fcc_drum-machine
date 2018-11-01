import React from 'react';

export const Power = ({ onChange, checked }) =>
  <div id="power">
    <p>Power</p>
    <label className="switch">
      <input type="checkbox" onChange={onChange} checked={checked} />
      <span className="slider"></span>
    </label>
  </div>
