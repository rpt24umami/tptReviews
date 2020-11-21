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
        ratings: undefined,
        grades: undefined,
        population: undefined,
      },
      grades: [],
    };
    this.getReviews = this.getReviews.bind(this);
    this.addHelpful = this.addHelpful.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  //   axios.get(`/${this.state.productId}/reviews/`)
  //     .then((results) => this.setState({ reviews: results.data.reviews, grades: results.data.grades }));
  }

  getReviews() {
    axios.get(`/${this.state.productId}/reviews?ratings=${this.state.sort.ratings || false}&grades=${this.state.sort.grades || false}`)
      .then((results) => this.setState(
        {
          reviews: results.data.reviews, grades: results.data.grades,
        },
      ));
  }

  addHelpful(reviewId) {
    axios.put(`/helpful/${reviewId}`)
      .then((results) => this.getReviews());
  }

  render() {
    const reviews = this.state.reviews.map((review) => <Review review={review} helpful={this.addHelpful}/>);
    return (
      <div>
        <Sort grades={this.state.grades} />
        {reviews}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
