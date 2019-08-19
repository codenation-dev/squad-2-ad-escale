// pagina home(inicial)

// inspiração https://www.petfinder.com/

import React from 'react';
import data from '../../data/pet.json';

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
          <Container>
            <Row>
              <Header />
            </Row>
            <Row>
              <HomeSlider />
            </Row>
            
            <HomeFilter handle={this.handleButtons} />
            <HomeContent pets={this.state.filteredPets} />
            <Footer />
          </Container>
        </div>
      </>
    );
  }
}
