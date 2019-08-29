import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import AddPet from '../../components/addpet';
import { connect } from 'react-redux';

class PetProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: [],
      image: [],
    };
  }

  componentDidMount() {
    const userId = 2;
    const endpoint = `https://petcode.herokuapp.com/api/pet/?user=${userId}`;
    this.handleGetAllPets(endpoint);
  }

  handleGetAllPets = async endpoint => {
    try {
      await axios
        .get(endpoint)
        .then(response => {
          this.setState({
            pet: response.data[4],
          });
        })
        .then(() => {
          this.setState({
            image: this.state.pet.images,
          });
        });
    } catch (e) {
      alert(e);
    }
    console.log(this.state.pet.size);
  };

  formatDate(string) {
    const mes = new Date(string).getDay();
    const dia = new Date(string).getDate();
    const ano = new Date(string).getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  render() {
    const images = this.state.image.map(image => (
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="400px"
          src={image.image}
          alt="fotos_pet"
        />
      </Carousel.Item>
    ));

    return (
      <>
        <Container>
          <Col xs>
            <Carousel className="Carrousel">{images}</Carousel>
          </Col>
          <h1>{this.state.pet.name}</h1>
          <Row>
            <hr />
            <Col>
              <h5>
                {this.state.pet.category === 'ADOCAO'
                  ? 'Adoção'
                  : this.state.pet.size === 'ACHADO'
                  ? 'Achados'
                  : 'Perdidos'}
              </h5>
              <p>{this.state.pet.pet_type === 1 ? 'Cachorro' : 'Gato'}</p>
              <p>{this.state.pet.gender === '1' ? 'Macho' : 'Fêmea'}</p>
              <p>
                {this.state.pet.size === '0'
                  ? 'Pequeno'
                  : this.state.pet.size === '1'
                  ? 'Médio'
                  : 'Grande'}
              </p>
              <p>{this.formatDate(this.state.pet.published_date)}</p>
            </Col>
            <Col>
              <h5>Contato do Pet</h5>
              <p>{this.state.pet.contact_name}</p>
              <p>{this.state.pet.email}</p>
              <p>{this.state.pet.state}</p>
              <p>{this.state.pet.city}</p>
              <p>{this.state.pet.phone_1}</p>
              <p>{this.state.pet.phone_2}</p>
            </Col>
          </Row>
          <Row>
            <h3>Informações</h3>
            {this.state.pet.description}
          </Row>
        </Container>
        {/* adiciono aqui o component addpet para teste */}
        <AddPet></AddPet>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    pet: state.home.pet,
  };
}

export default connect(mapStateToProps)(PetProfile);
