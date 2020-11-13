import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Review from './review.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews:[]
    }
  }

  componentDidMount() {
    axios.get('/reviews')
      .then(results => this.setState({reviews: results.data}))
      .then(() => console.log(this.state))
  }

  render() {
    var reviews = this.state.reviews.map ((review) => {
      return <Review/>
    })
    return reviews;
  }

};

ReactDOM.render(<App/>, document.getElementById('root'))