// inspiração https://www.petfinder.com/
import React from 'react';
// Requisições HTTP
//import data from '../../data/pet.json';
import axios from 'axios';
// Estilos
// Importações bootstrap
import { Container, Row } from 'react-bootstrap'

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
    this.handleGetAllPets(endpoint)

  }

  handleGetAllPets = async (endpoint) => {
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
 
  };

  render() {
    return (
      <>
          <Container>
            <Row>
              <Header />
            </Row>
            <Row>
              <HomeSlider />
            </Row>
            <Row>
              <HomeFilter handle={this.handleButtons} />
            </Row>
            <Row>
              <HomeContent pets={this.state.filteredPets} />
            </Row>
            <Row>
              <Footer />
            </Row>
          </Container>
      </>
    );
  }
}
