import React from 'react';
import './Background.scss';

const Background = ({ id, children }) => {
  return (
    <div class="background" id={id}>
      {children}
    </div>
  );
}

export default Background;