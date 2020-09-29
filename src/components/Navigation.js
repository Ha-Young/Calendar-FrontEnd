import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from './Button';

export default function Navigation() {
  const history = useHistory();
  function handleAddEvent() {
    history.push('/events/new');
  }

  return (
    <nav>
      <div>
        <Button onClick={handleAddEvent} value='이벤트 만들기'/>
      </div>
    </nav>
  );
}
