/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledUser = styled.div`
  font-size: 16px;
`;

const StyledTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

function Review(props) {
  console.log(props);
  return (
    <div>
      <StyledUser>{props.review.user}</StyledUser>
      <StyledTitle>{props.review.title}</StyledTitle>
      <div>{props.review.rating}</div>
      <div>{props.review.description}</div>
      <div>{props.review.helpful}</div>
    </div>
  );
}

export default Review;
