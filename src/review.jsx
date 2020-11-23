/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Ratings from './ratings.jsx';

// const StyledUser = styled.div`
//   font-size: 16px;
// `;

// const StyledTitle = styled.div`
//   font-size: 16px;
//   font-weight: bold;
// `;

function Review(props) {
  return (
    <div className="reviewContainer">
      <div className="avatar">
        <span>
          <img className="avatar_img" src="https://ecdn1.teacherspayteachers.com/images/avatars/default.jpg" />
        </span>
        <div className="avatar_namedate">
          <p className="avatar_namedate_name">{props.review.user}</p>
          <p className="avatar_namedate_date"> October 25th, 2020</p>
        </div>
      </div>
      <div className="rating">
        <Ratings rating={props.review.rating} />
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
      </div>
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
