import React from 'react';

const Content = ({ className, textContent }) => {
  return (
    <div className={className}>
      {textContent}
    </div>
  )
};

export default Content;
