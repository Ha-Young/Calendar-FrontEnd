import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import HeaderBtn from "../../../shared/HeaderBtn";
import FilterModal from "../Nav/FilterModal";

const Wrapper = styled.div`
  position: relative;

  p {
    margin-right: 0.5em;
  }
`;

const Filter = ({ page }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Wrapper>
      <HeaderBtn onClick={() => setIsClicked(prev => !prev)}>
        <p>{page}</p>
        <FontAwesomeIcon icon={faCaretDown} />
      </HeaderBtn>
      {isClicked && <FilterModal />}
    </Wrapper>
  );
};

export default Filter;

Filter.propTypes = {
  page: PropTypes.string.isRequired,
};
