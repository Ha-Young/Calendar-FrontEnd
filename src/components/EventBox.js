import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
  background: ${({theme}) => theme.blue};
  margin: 5px 20px;
  border-radius: 10px;
  transition: all 0.3s;

  a {
    width: 100%;
  }

  article {
    color: ${({theme}) => theme.white};
    width: 100%;

    h5 {
      font-size: 16px;
      margin-bottom: 10px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    p {
      width: inherit;
      font-size: 12px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin-bottom: 10px;
    }

    span {
      font-size: 10px;
    }
  }

  &:hover {
    cursor: pointer;
    background: ${({theme}) => theme.yellow};
  }
`;

export default function EventBox({
  title,
  description,
  id,
  date
}) {
  return (
    <Wrapper>
      <Link to={`/events/${id}`}>
        <article>
          <h5>{title}</h5>
          <p>{description}</p>
          <span>{date}</span>
        </article>
      </Link>
    </Wrapper>
  );
}

EventBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
