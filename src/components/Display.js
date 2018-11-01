import React from 'react';

export const Display = ({ isChecked, text }) =>
  <div id="display"><p>{isChecked ? text : null}</p></div>
