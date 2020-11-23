import React from 'react';

function Ratings(props) {
  return (
    <span className="ratingWrapper">
      {[1, 2, 3, 4, 5].map((item) => (
        <div className="rating_star">
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 460 550" version="1.1">
            <svg width="100%" height="100%">
              <polygon fill={(props.rating >= item) ? '#2885BF' : '#777'} points="229,0 300,134 459,167 344,279 371,437 229,363 87,437 114,279 0,167 158,144" />
            </svg>
          </svg>
        </div>
      ))}
    </span>
  );
}

export default Ratings;
