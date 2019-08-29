import React from 'react';
// Axios é uma biblioteca para facilitar as requisições
import axios from 'axios';
// importação dos componentes que serão utilizados neste container (home)
import HomeContent from '../../components/homecontent';
import HomeSlider from '../../components/homeslider';
import HomeFilter from '../../components/homefilter';
// Import da action que vai preencher o estado pets no redux
import { fillPets } from './actions';
// Para podermos utilizar o estado que está no redux importamos essa classe e conectamos esse componente(home) ao redux
import { connect } from 'react-redux';

// Container main page(home)
class Home extends React.Component {
  componentDidMount() {
    /**
     * Chamando o manipulador que vai fazer a requisição, armazenar o response.data e
     * disparar a action passando o payload(que é o response.data com todos os pets nesse caso)
     * para preencher o state do redux com todos os pets
     * */
    this.handleGetAll();
  }

  /**
   * Manipulador que faz requisição na api e devolve a lista completa de pets
   * e dispara a action que popula o state pets no redux
   */
  handleGetAll = async () => {
    try {
      await axios
        .get('https://petcode.pythonanywhere.com/api/pet/')
        .then(response => {
          const allpets = response.data;
          this.props.dispatch(fillPets(allpets));
        });
    } catch (e) {
      alert(e);
    }
  };

  /**
   * Manipulador que faz requisição na api, aplicanto a query que recebe na url,
   * devolve a lista filtrada de pets
   * e dispara a action que popula o state pets no redux.
   */
  handleGetFilteredPets = async query => {
    try {
      await axios
        .get(`https://petcode.pythonanywhere.com/api/pet/?category=${query}`)
        .then(response => {
          const results = response.data;
          this.props.dispatch(fillPets(results));
        });
    } catch (e) {
      alert(e);
    }
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="Row">
            <div className="Col">
              <HomeSlider />
            </div>
          </div>
          <div className="Row">
            <div className="Col">
              <HomeFilter handleGetFilteredPets={this.handleGetFilteredPets} />
            </div>
          </div>
          <div className="Row">
            <div className="Col">
              <HomeContent pets={this.props.pets} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

/**
 * Callback que devolve, mapeia um objeto pets para props deste container (home),
 * vindo do state pets da store do redux
 */
function mapStateToProps(state) {
  return {
    pets: state.home.pets,
  };
}

/**
 * Função connect do redux, recepe o callback que mapeia o state pets da store do redux
 * e associa a uma prop de mesmo nome pets a este container (home).
 */
export default connect(mapStateToProps)(Home);
