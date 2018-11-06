import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startFetchCharacters } from '../actions/charactersActions';

class MainContentContainer extends Component {
  componentDidMount() {
    this.props.fetchCharacters(0, 'name');
  }

  render() {
    return (
      <div>
        MainContentContainer
      </div>
    );
  }
}

export default connect(null, { fetchCharacters: startFetchCharacters })(MainContentContainer);
