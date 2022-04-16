/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/no-unused-state
    this.state = { searchterm: '' };
    // add to the bottom of your constructor
    this.onInputChange = this.onInputChange.bind(this);
  }

  // eslint-disable-next-line react/no-unused-class-component-methods
  onInputChange(event) {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ searchterm: event.target.value });
    this.props.onSearchChange(event.target.value);
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <input onChange={this.onInputChange} value={this.state.searchterm} />
        <p> State value: {this.state.searchterm} </p>
      </div>
    );
  }
}

export default SearchBar;
