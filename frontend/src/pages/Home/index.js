// pagina home(inicial)

// inspiração https://www.petfinder.com/

import React from 'react';
import data from '../../data/pet.json';

/* Componente cabeçalho, carrega logotipo, main links, componente de busca geral no site
 link para se inscrever e fazer login no site
 
 Componentes: 
 -Logotipo
 -Campo de Busca Geral no Site(igual o recipes, busca abrangente com rotas inclusive)
 -SignIn
 -SignUp

 */
const Header = () => {
  return (
    <>
      <h1>Header</h1>
    </>
  );
};

/* Componente central slider para campanhas

  Disponiveis para adoção
  Animais que acabaram de ser adotados
  Animais encontrados

*/
const HomeSlider = () => {
  return (
    <>
      <h1>HomeSlider</h1>
    </>
  );
};

/* Componente de filtro central, com as principais opções de filtro
  
  Categorias básicas
  
  - Achados
  - Perdidos
  - Adoção

  - Outros filtros que podem ser explorados


*/

const HomeFilter = ({ handle }) => {
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
const FooterNav = () => {
  return (
    <>
      <h1>FooterNav</h1>
    </>
  );
};

// Componente de footer para marca registrada, redes socias e etc.
const FooterSocialTrademark = () => {
  return (
    <>
      <h1>FooterSocialTrademark</h1>
    </>
  );
};

// Componente de footer global
const Footer = () => {
  return (
    <>
      <FooterNav />
      <FooterSocialTrademark />
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
          <Header />
          <HomeSlider />
          <HomeFilter handle={this.handleButtons} />
          <HomeContent pets={this.state.filteredPets} />
          <Footer />
        </div>
      </>
    );
  }
}
