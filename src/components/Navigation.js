import React from 'react';

import Button from './Button';

export default function Navigation() {
  function handleAddEvent() {
    console.log("이벤트 만들어!");
  }

  return (
    <nav>
      <div>
        <Button onClick={handleAddEvent} value='이벤트 만들기'/>
      </div>
    </nav>
  );
}
