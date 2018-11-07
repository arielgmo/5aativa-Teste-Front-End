import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Icon,
  Button,
} from 'antd';
import { startFetchCharacters } from '../actions/charactersActions';
import './MainContentContainer.css';
import 'antd/dist/antd.css';

const pageSize = 20;

class MainContentContainer extends Component {
  static propTypes = {
    fetchCharacters: PropTypes.func,
    charactersReducer: PropTypes.objectOf({
      total: PropTypes.number,
      characters: PropTypes.object,
    }),
  }

  static defaultProps = {
    fetchCharacters: () => {},
    charactersReducer: {
      total: 0,
      characters: [],
    },
  }

  state = {
    orderAscend: true,
    page: 0,
  }

  componentDidMount() {
    this.callFetchCharacters();
  }

  callFetchCharacters = () => {
    const {
      fetchCharacters,
    } = this.props;
    const {
      orderAscend,
      page,
    } = this.state;
    fetchCharacters(page * pageSize, orderAscend ? 'name' : '-name');
  }

  onToggleOrder = () => {
    const {
      orderAscend,
    } = this.state;

    this.setState({
      orderAscend: !orderAscend,
    }, () => this.callFetchCharacters());
  }

  onChangePage = (newPage) => {
    this.setState({
      page: newPage,
    }, () => this.callFetchCharacters());
  }

  getTotalPages = () => {
    const {
      charactersReducer,
    } = this.props;
    const totalCharacters = Number(charactersReducer.total);
    if (totalCharacters % pageSize === 0) {
      return parseInt(totalCharacters / pageSize, 10);
    }
    return parseInt((totalCharacters / pageSize) - 1, 10);
  }

  checkBound = (page) => {
    if (page >= 0 && page <= this.getTotalPages()) {
      this.onChangePage(page);
    }
  }

  getCards = () => {
    const {
      charactersReducer,
    } = this.props;
    return charactersReducer.characters.map(character => (
      <Col span={6}>
        <div className="character-card">
          <img
            src={`${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`}
            alt={character.name}
            className="character-img"
          />
          <p className="character-name-text">{character.name}</p>
          <div className="card-divider" />
          <p className="character-description-text">{character.description}</p>
        </div>
      </Col>
    ));
  }

  render() {
    const {
      orderAscend,
      page,
    } = this.state;
    return (
      <div className="cards-main-container-anchor">
        <div className="cards-main-container">
          <div className="cards-container-title">
            <p>Character</p>
          </div>
          <div className="buttons-menu">
            <select className="dropbox-category">
              <option>Characters</option>
              <option>Comics</option>
              <option>Creators</option>
              <option>Events</option>
              <option>Series</option>
              <option>Stories</option>
            </select>
            <div className="alphatical-button-container">
              <Icon className="icon-filter" type="filter" theme="twoTone" twoToneColor="#ed1d24" />
              <div className="text-anchor">
                <div className="a-z-label">{orderAscend ? 'A-Z' : 'Z-A'}</div>
              </div>
              <Button className="button" onClick={this.onToggleOrder}>
                <Icon className="icon-button" type={orderAscend ? 'up' : 'down'} />
              </Button>
            </div>
          </div>
          <div className="cards-container">
            <Row>
              {this.getCards()}
            </Row>
            <div className="page-buttons-container">
              <Button className="button-page" onClick={() => this.checkBound(Number(page) - 1)}>
                <Icon className="icon-button" type="left" />
              </Button>
              <input className="input-page" value={page} onChange={event => this.checkBound(event.target.value)} />
              <div className="text-anchor">
                <div className="a-z-label">
                  {<div className="pageTotal">{`de ${this.getTotalPages()}`}</div>}
                </div>
              </div>
              <Button className="button-page" onClick={() => this.checkBound(Number(page) + 1)}>
                <Icon className="icon-button" type="right" />
              </Button>
            </div>
          </div>
        </div>
        <div className="red-line-divider" />
      </div>
    );
  }
}

export default connect(
  ({ charactersReducer }) => ({
    charactersReducer,
  }),
  {
    fetchCharacters: startFetchCharacters,
  },
)(MainContentContainer);
