/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Review from './review.jsx';
import Sort from './sort.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 1,
      reviews: [],
      sort: {
        ratings: 'All',
        grades: 'All',
        population: 'All',
      },
      grades: [],
    };
  }

  componentDidMount() {
    axios.get(`/${this.state.productId}/reviews/`)
      .then((results) => this.setState({ reviews: results.data.reviews, grades: results.data.grades }))
      .then(() => {
        console.log(this.state);
      });
  }

  render() {
    const reviews = this.state.reviews.map((review) => <Review review={review} />);
    return (
      <div>
        <Sort />
        {reviews}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
