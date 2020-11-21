import React from 'react';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div>
          <ul>
            <li value="5">5 stars </li>
            <li value="4">4 stars</li>
            <li value="3">3 stars</li>
            <li value="2">2 stars</li>
            <li value="1">1 star</li>
          </ul>
        </div>
        <div>
          <ul>
            {this.props.grades.map((grade) => <li>{grade}</li>)}
          </ul>
        </div>
        <div>
          <ul>
            <li>Learning difficulties</li>
            <li>Mild to sever disabilities</li>
            <li>Autism Spectrum</li>
            <li>Emerging bilinguals/ELs/ESOLs/ENLs</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sort;
