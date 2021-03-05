import React from 'react';
import './Background.scss';

const Background = ({ id, children }) => {
  return (
    <div className="background" id={id}>
      {children}
    </div>
  );
}

export default Background;
