// pagina home(inicial)

import React from 'react';
import data from '../../data';

const HomeHeadBar = () => {
  return (
    <>
      <h1>HomeHeadBar</h1>
    </>
  );
};

const HomeNavBar = () => {
  return (
    <>
      <h1>HomeNavBar</h1>
    </>
  );
};

const HomeFilterBar = ({ handle }) => {
  return (
    <>
      <nav>
        <button
          onClick={e => {
            handle(e);
          }}
          value="achados"
        >
          Achados
        </button>
        <button
          onClick={e => {
            handle(e);
          }}
          value="perdidos"
        >
          Perdidos
        </button>
        <button
          onClick={e => {
            handle(e);
          }}
          value="adocao"
        >
          Adoção
        </button>
      </nav>
    </>
  );
};

const HomeContent = ({ pets }) => {
  return (
    <>
      {pets.map(item => {
        return (
          <h1>{`${item.especie}, ${item.nome}, ${item.raca}, ${item.status}.`}</h1>
        );
      })}
    </>
  );
};

const HomeFooterNavBar = () => {
  return (
    <>
      <h1>HomeFooterNavBar</h1>
    </>
  );
};

const HomeFooterTradeBar = () => {
  return (
    <>
      <h1>HomeFooterTradeBar</h1>
    </>
  );
};

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
          <HomeHeadBar />
          <HomeNavBar />
          <HomeFilterBar handle={this.handleButtons} />
          <HomeContent pets={this.state.filteredPets} />
          <HomeFooterNavBar />
          <HomeFooterTradeBar />
        </div>
      </>
    );
  }
}
