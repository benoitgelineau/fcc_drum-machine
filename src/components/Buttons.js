import React from 'react';
import { sounds } from '../sounds';

export const Buttons = ({ isChecked, onClick }) => {
  const keys = Object.keys(sounds);
  return (
    <div id="grid">

    {keys.map((key) =>
      <button
        key={sounds[key]['name']}
        id={sounds[key]['name']}
        className={isChecked ? "drum-pad active" : "drum-pad"}
        onClick={isChecked ? onClick : null}>

          {key}
          <audio id={key} className="clip" src={sounds[key]['url']}></audio>

      </button>
    )}

    </div>
  );
}
