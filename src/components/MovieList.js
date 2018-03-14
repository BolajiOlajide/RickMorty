import React, { Component } from 'react';
import { connect } from 'react-redux';

import './MovieList.css';

import getCharacters from '../actions/character.action';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    const { characters } = this.props;
    console.log(characters);

    return (
      <div className="main">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand">Rick & Morty</a>
        </nav>
        <section className="character-container">
        {
          characters.map(character => (
            <div className="card" style={{width: "18rem"}}>
              <img className="card-img-top" src={character.image} alt={character.name} />
              <div className="card-body">
                <p className="card-text">Name: {character.name}</p>
                <p className="card-text">Gender: {character.gender}</p>
                <p className="card-text">Species: {character.species}</p>
                <p className="card-text">Status: {character.status}</p>
                <p className="card-text">Location: {character.location.name}</p>
              </div>
            </div>
          ))
        }
        </section>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getCharacters: () => dispatch(getCharacters())
});

const mapStateToProps = (state) => ({
  characters: state.characters
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
