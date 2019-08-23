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

// Componente página Home que renderiza os componentes menores
export default class Home extends React.Component {
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

  handleButtons = e => {
    let tempArrayPets = this.state.pets.filter(item => {
      let name = e.target.name.toUpperCase();
      return item.category.toUpperCase().includes(name);
    });

    this.setState({
      filteredPets: tempArrayPets,
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
              <HomeFilter handle={this.handleButtons} />
            </div>
          </div>
          <div className="Row">
            <div className="Col">
              <HomeContent pets={this.state.filteredPets} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
