// pagina home(inicial)

// inspiração https://www.petfinder.com/

import React from 'react';
import data from '../../data';

// Componente cabeçalho, carrega logotipo, main links, componente de busca geral no site
// link para se inscrever e fazer login no site
const HomeHeadBar = () => {
  return (
    <>
      <h1>HomeHeadBar</h1>
    </>
  );
};

// Componente de barra de navegação principal do site, com os recursos principais disponibilizados pelo site
const HomeNavBar = () => {
  return (
    <>
      <h1>HomeNavBar</h1>
    </>
  );
};

// Componente central slider para campanhas
const HomeSliderBar = () => {
  return (
    <>
      <h1>HomeSliderBar</h1>
    </>
  );
};

// Componente de filtro central, com as principais opções de filtro
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

// Componente de conteúdo da home, o body efetivamente
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

// Componente de footer, onde pode ter o mapa de navegação do site por exemplo, com todos os links
const HomeFooterNavBar = () => {
  return (
    <>
      <h1>HomeFooterNavBar</h1>
    </>
  );
};

// Componente de footer para marca registrada, redes socias e etc.
const HomeFooterTradeBar = () => {
  return (
    <>
      <h1>HomeFooterTradeBar</h1>
    </>
  );
};

// Componente página Home que renderiza os componentes menores
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
