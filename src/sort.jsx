import React from 'react';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openStar: false,
      openGrade: false,
      openPopulation: false,
    };
    this.handleSortClick = this.handleSortClick.bind(this);
  }

  handleSortClick(e) {
    console.log(e.target.id);
    if (e.target.id === 'sortRating') {
      this.setState({ openStar: true });
    }
    if (e.target.id === 'sortGrade') {
      this.setState({ openGrade: true });
    }
    if (e.target.id === 'sortPopulation') {
      this.setState({ openGrade: true });
    }
  }

  render() {
    return (
      <div className="sortContainer">
        <select id="ratings" onChange={this.props.onSort}>
          <option value="0">All Ratings</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <select id="grades" onChange={this.props.onSort}>
          <option value="0">All Grades</option>
          {this.props.grades.map((grade, key) => <option key={key} value={grade}>{grade}</option>)}
        </select>
        <select id="population">
          <option>All Learning</option>
          <option>Learning difficulties</option>
          <option>Mild to severe disabilities</option>
          <option>Autism Spectrum</option>
          <option>Emerging bilinguals/ELs/ESOLs/ENLs</option>
        </select>
      </div>
    );
  }
}

export default Sort;
