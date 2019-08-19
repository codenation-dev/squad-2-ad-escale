// pagina home(inicial)

// inspiração https://www.petfinder.com/

import React from 'react';
import data from '../../data/pet.json';
import axios from 'axios';

// importação dos componentes
import Footer from '../../components/footer';
import Header from '../../components/header';
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
    const endpoint = 'https://petcode.herokuapp.com/api/pet/'
    this.handleGetUsers(endpoint)

  }

  handleGetUsers = async (endpoint) => {
    try{
      await axios
        .get(endpoint)
        .then(response => {
          this.setState({
            pets: response.data,
          })
        })
        .then(()=>{
          this.setState({
            filteredPets: this.state.pets
          })
        })
    }catch(e){
      alert(e)
    }
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
