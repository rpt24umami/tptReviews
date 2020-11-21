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
      <StyledTitle>
        {(function () {
          let satisfaction = '';
          switch (props.review.rating) {
            case 1:
              satisfaction = 'Not Satisfied';
              break;
            case 2:
              satisfaction = 'Barely Satisfied';
              break;
            case 3:
              satisfaction = 'Somewhat Satisfied';
              break;
            case 4:
              satisfaction = 'Very Satisified';
              break;
            case 5:
              satisfaction = 'Extremely Satisfied';
              break;
            default:
              satisfaction = '';
          }
          return satisfaction;
        }())}
      </StyledTitle>
      <div>{props.review.rating}</div>
      <div>{props.review.description}</div>
      <div
        className="fa fa-thumbs-up"
        onClick={() => {
          props.helpful(props.review._id);
        }}
      >
        {props.review.helpful}
        {' '}
        Helpful
      </div>
    </div>
  );
}

export default Review;
