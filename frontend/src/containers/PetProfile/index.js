import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron, Container, Row, Col, Carousel } from 'react-bootstrap';
import AddPet from '../../components/addpet';
import { connect } from 'react-redux';
// Import da action que vai preencher o estado pets no redux
import { fillPet } from '../Home/actions';

class PetProfile extends Component {
  fetchPetByID = async id => {
    try {
      await axios
        .get(`https://petcode.pythonanywhere.com/api/pet/${id}/`)
        .then(res => {
          const pet = res.data;
          this.props.dispatch(fillPet(pet));
        });
    } catch (e) {
      console.log(e);
    }
  };

  formatDate = string => {
    const mes = new Date(string).getDay();
    const dia = new Date(string).getDate();
    const ano = new Date(string).getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchPetByID(id);
  }

  render() {
    const {
      images = [],
      name = '',
      category = '',
      size = '',
      pet_type = '',
      gender = '',
      contact = '',
      email = '',
      state = '',
      city = '',
      phone_1 = '',
      phone_2 = '',
      description = '',
      published_date = '',
      contact_name = '',
    } = this.props.pet;

    const imagesCarouselItem = images.map((item, index) => (
      <Carousel.Item key={index} style={{ maxHeight: '50%', minHeight: '50%' }}>
        <img
          className="d-block mx-auto custom-tag"
          src={item.image}
          alt="fotos_pet"
        />
      </Carousel.Item>
    ));

    return (
      <>
        <Container>
          <Row>
            <Col>
              <style>
                {`.custom-tag {
                min-width: 20rem;
                max-width: 20rem;
                max-height: 20rem;
                min-height: 20rem;
              }`}
              </style>
              <Carousel className="Carrousel">{imagesCarouselItem}</Carousel>
            </Col>
          </Row>

          <Jumbotron
            fluid
            style={{ marginTop: '20px', backgroundColor: '#fff' }}
          >
            <Container fluid>
              <h1 className="display-3">{name}</h1>
              <hr class="my-4"></hr>
              <p className="lead">
                <Row>
                  <Col>
                    <h5>
                      {category === 'ADOCAO'
                        ? 'Adoção'
                        : size === 'ACHADO'
                        ? 'Achados'
                        : 'Perdidos'}
                    </h5>
                    <p>{pet_type === 1 ? 'Cachorro' : 'Gato'}</p>
                    <p>{gender === '1' ? 'Macho' : 'Fêmea'}</p>
                    <p>
                      {size === '0'
                        ? 'Pequeno'
                        : size === '1'
                        ? 'Médio'
                        : 'Grande'}
                    </p>
                    <p>{this.formatDate(published_date)}</p>
                  </Col>
                  <Col>
                    <h5>Contato do Pet</h5>
                    <p>{contact_name}</p>
                    <p>{email}</p>
                    <p>{state}</p>
                    <p>{city}</p>
                    <p>{phone_1}</p>
                    <p>{phone_2}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h5>Informações adicionais:</h5>
                    {description}
                  </Col>
                </Row>
              </p>
            </Container>
          </Jumbotron>
        </Container>
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
