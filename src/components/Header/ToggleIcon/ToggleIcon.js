import React from 'react';
import Icon from '../../publicComponent/Icon/Icon';
import './ToggleIcon.scss'

const ToggleIcon = ({ iconClassName, textContent, fontSize }) => {
  return (
    <div className="toggleIcon">
      <Icon className={iconClassName} fontSize={fontSize}>
      </Icon>
      <span className="toggleIcon__text">{textContent}</span>
    </div>
    
  );
}

export default ToggleIcon;