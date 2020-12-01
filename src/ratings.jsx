import React from 'react';

function Ratings(props) {
  return (
    <span className="ratingWrapper">
      {[1, 2, 3, 4, 5].map((item) => (
        <span className="fa fa-star" style={{color: (props.rating >= item) ? '#2885BF' : '#777'}}>

        </span>
      ))}
    </span>
  );
}
export default Ratings;
