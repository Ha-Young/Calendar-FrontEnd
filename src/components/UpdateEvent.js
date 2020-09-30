import React from 'react';
import { useParams, useHistory } from 'reat-router-dom';

import InfoPage from './InfoPage';
import WriteEventForm from './WriteEventForm';
import Button from './Button';

export default function UpdateEvent({}) {
  const history = useHistory();
  const params = useParams();

  function goBack() {
    history.push(`/events/${params.eventId}`);
  }

  return (
    <InfoPage>
      <Container>
        <legend>이벤트 만들기</legend>
        <div>
          <WriteEventForm
            onChange={onChange}
            title={title}
            description={description}
            date={date}
            startTime={startTime}
            endTime={endTime}
          />
          <div>
            <Button
              value='취소'
              onClick={goBack}
            />
            <Button
              value='업데이트'
              onClick={handleCreateEvent}
            />
          </div>
        </div>
      </Container>
    </InfoPage>
  );
}