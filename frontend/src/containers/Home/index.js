// inspiração https://www.petfinder.com/
import React from 'react';
// Requisições HTTP
//import data from '../../data/pet.json';
import axios from 'axios';
// Estilos
// Importações bootstrap

// importação dos componentes
import HomeContent from '../../components/homecontent';
import HomeSlider from '../../components/homeslider';
import HomeFilter from '../../components/homefilter';

import { handleGetPets, handleGetFilteredPets } from './actions';

import { connect } from 'react-redux';

// Componente página Home que renderiza os componentes menores
class Home extends React.Component {
  state = {
    pets: [],
    filteredPets: [],
  };

  componentDidMount() {
    const endpoint = 'https://petcode.herokuapp.com/api/pet/';
    this.handleGetAllPets(endpoint);
  }

  handleGetAllPets = async endpoint => {
    try {
      await axios
        .get(endpoint)
        .then(response => {
          this.setState({
            pets: response.data,
          });
        })
        .then(() => {
          this.setState({
            filteredPets: this.state.pets,
          });
        });
    } catch (e) {
      alert(e);
    }
  };

  handleAllFilters = e => {
    let tempArrayPets = this.state.pets.filter(item => {});
  };

  handleFilterAchados = e => {
    axios
      .get('https://petcode.herokuapp.com/api/pet/?category=ENCONTRADOS')
      .then(response => {
        const achados = response.data;
        this.props.dispatch(handleGetFilteredPets(achados));
      });
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
              <HomeFilter handle={this.handleFilterAchados} />
            </div>
          </div>
          <div className="Row">
            <div className="Col">
              <HomeContent pets={this.props.filteredPets} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    pets: state.home.pets,
    filteredPets: state.home.filteredPets,
  };
}

export default connect(mapStateToProps)(Home);
