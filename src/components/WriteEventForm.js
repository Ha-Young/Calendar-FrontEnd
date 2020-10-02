import React from 'react';

import Input from '../components/Input';

export default function WriteEventForm({
  formTitle,
  onChange,
  data,
  children
}) {
  const {
    date,
    description,
    endTime,
    startTime,
    title,
  } = data;

  const hours24 = Array(24).fill(null);

  return (
    <fieldset>
      <legend>
        {formTitle}
      </legend>
      <div>
        Title:
        <Input
          type='text'
          onChange={onChange}
          placeholder='Title 을 입력해주세요'
          name='title'
          value={title}
          focus={true}
        />
        Description:
        <Input
          type='text-area'
          onChange={onChange}
          placeholder='Description 을 입력해주세요'
          name='description'
          value={description}
        />
        Date:
        <Input
          type='date'
          onChange={onChange}
          name='date'
          value={date}
        />
        StartTime:
        <select
          name='startTime'
          onChange={onChange}
          value={startTime}
        >
          {
            hours24.map((_, index) => {
              return <option key={index} value={index}>{index}시</option>;
            })
          }
        </select>
        EndTime:
        <select
          name='endTime'
          onChange={onChange}
          value={endTime}
        >
          {
            hours24.map((_, index) => {
              return <option key={index} value={index}>{index}시</option>;
            })
          }
        </select>
        <div>
          {children}
        </div>
      </div>
    </fieldset>
  );
}
