// pagina home(inicial)

import React from 'react';
import data from '../../data';

export default class Home extends React.Component {
  state = {
    pets: [],
    filteredPets: [],
  };

  componentWillMount() {
    this.setState({
      pets: [...data],
      filteredPets: [...data],
    });
  }

  handleButtons = e => {
    let filteredPets = [...this.state.pets];
    filteredPets = filteredPets.filter(item => {
      return item.status === e.target.value;
    });
    this.setState({
      filteredPets: filteredPets,
    });
  };

  render() {
    return (
      <>
        <div className="row">
          <button onClick={this.handleButtons} value="achados">
            Achados
          </button>
          <button onClick={this.handleButtons} value="perdidos">
            Perdidos
          </button>
          <button onClick={this.handleButtons} value="adocao">
            Adoção
          </button>

          {this.state.filteredPets.map(item => {
            return (
              <h1>{`${item.especie}, ${item.nome}, ${item.raca}, ${item.status}.`}</h1>
            );
          })}
        </div>
      </>
    );
  }
}
