import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
  background: ${({theme}) => theme.blue};
  margin: 5px 20px;
  border-radius: 10px;

  a {
    width: 100%;
  }

  article {
    color: white;
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
  }
`;

export default function EventBox({
  data: {
    title,
    description,
    id,
    createdAt
  }
}) {
  return (
    <Wrapper>
      <Link to={`/events/${id}`}>
        <article>
          <h5>{title}</h5>
          <p>{description}</p>
          <span>{createdAt.slice(0, 10)}</span>
        </article>
      </Link>
    </Wrapper>
  );
}

EventBox.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }),
};
