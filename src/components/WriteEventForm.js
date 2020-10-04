import React from 'react';
import PropTypes from 'prop-types';

import Input from '../components/Input';
import { HourOption } from './Option';

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

  return (
    <fieldset>
      <legend>
        {formTitle}
      </legend>
      <div>
        <label htmlFor='title'>Title</label>
          <Input
            id='title'
            type='text'
            onChange={onChange}
            placeholder='Title 을 입력해주세요'
            name='title'
            value={title}
            focus={true}
          />
        Description:
        <Input
          type='textarea'
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
          <HourOption />
        </select>
        EndTime:
        <select
          name='endTime'
          onChange={onChange}
          value={endTime}
        >
          <HourOption />
        </select>
        <div>
          {children}
        </div>
      </div>
    </fieldset>
  );
}

WriteEventForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  children: PropTypes.node,
};
