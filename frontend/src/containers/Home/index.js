// inspiração https://www.petfinder.com/
import React from 'react';
// Requisições HTTP
//import data from '../../data/pet.json';
import axios from 'axios';
// Estilos
// Importações bootstrap
import { Container, Row, Col } from 'react-bootstrap';

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
        <Container>
          <Row>
            <Col xs>
              <HomeSlider />
            </Col>
          </Row>
          <Row>
            <Col xs>
              <HomeFilter handle={this.handleButtons} />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <HomeContent pets={this.state.filteredPets} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
