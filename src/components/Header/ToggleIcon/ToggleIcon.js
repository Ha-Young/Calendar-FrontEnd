import React from 'react';
import Icon from '../../publicComponent/Icon/Icon';
import './ToggleIcon.scss'

const ToggleIcon = ({ iconClassName, textContent }) => {
  return (
    <div className="toggleIcon">
      <Icon className={iconClassName} fontSize={"30px"}>

      </Icon>
      <span className="toggleIcon__text">{textContent}</span>
    </div>
    
  );
}

export default ToggleIcon;