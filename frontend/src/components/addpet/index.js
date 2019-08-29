import React, {Component} from 'react'
import axios from 'axios'
import { Container, Form, Col, Button } from 'react-bootstrap';
import { IoMdPaw } from 'react-icons/io';
import { handleToken } from '../../containers/SignIn/actions';

class AddPet extends Component {
  state = {
    name: '',
    category: '',
    pet_type: '',
    gender: '',
    size: '',
    contact_name: '',
    email: '',
    phone_1: '',
    phone_2: '',
    state: '',
    city: '',
    description: ''

  };

  handleChangeUserId = value => {
    this.setState({userId: value});
  };

  handleChangeNamePet = value => {
    this.setState({name: value});
  };

  handleChangeCategory = value => {
    this.setState({category: value});
  };

  handleChangeType = value => {
    this.setState({pet_type: value});
  };

  handleChangeGender= value => {
    this.setState({gender: value});
  };

  handleChangeSize= value => {
    this.setState({size: value});
  };

  handleChangeContact= value => {
    this.setState({contact_name: value});
  };

  handleChangeEmail= value => {
    this.setState({email: value});
  };

  handleChangePhone1= value => {
    this.setState({phone_1: value});
  };

  handleChangePhone2= value => {
    this.setState({phone_2: value});
  };

  handleChangeCity= value => {
    this.setState({city: value});
  };

  handleChangeState= value => {
    this.setState({state: value});
  };

  handleChangeDescription= value => {
    this.setState({description: value});
  };

  handleAddPet = async e => {
    e.preventDefault();
    const { userId, name, category, pet_type, gender, size, contact_name, email, phone_1, phone_2, state, city, description} = this.state;

    var config = {
      headers: { Authorization: 'token c80c35bf3ea10b9e06c7c2dd8e11c404b6ef5c57' }
      };
    // axios.defaults.headers.common = config;

    try {
      console.log(this.state)
        await axios
          .post('https://petcode.pythonanywhere.com/api/pet/', {
            userId, name, category, pet_type, gender, size, contact_name, email, phone_1, phone_2, state, city, description
          },
          config)
          .then(response => {
            const res = response.data;
            console.log(res)
          });
      } catch (err) {
        console.log(err)
        this.setState({ error: 'Erro' });
      }
    }
  render() {
   return (
      <>
      <div className="row">
          </div>
          <div className="row">
            <div className="img-fluid rounded mx-auto d-block">
              <IoMdPaw className="img-fluid" size="135" />
            </div>
          </div>
        <Form onSubmit={this.handleAddPet}>
          <Container>
            <Form.Row>
              <Form.Group controlId="formGridUser">
                <Form.Control placeholder="Id" onChange={e => this.handleChangeUserId(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formGridNamePet">
                <Form.Control placeholder="Nome do Pet" onChange={e => this.handleChangeNamePet(e.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCategoria" onChange={e => this.handleChangeCategory(e.target.value)}>
                <Form.Control as="select">
                  <option>Categoria...</option>
                  <option>ADOCAO</option>
                  <option>ENCONTRADOS</option>
                  <option>PROCURA_SE</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridTipo" onChange={e => this.handleChangeType(e.target.value)}>
                <Form.Control as="select">
                  <option>Tipo...</option>
                  <option>1</option>
                  <option>2</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridGenero" onChange={e => this.handleChangeGender(e.target.value)}>
                <Form.Control as="select">
                  <option>Gênero...</option>
                  <option>m</option>
                  <option>f</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSize" onChange={e => this.handleChangeSize(e.target.value)}>
                <Form.Control as="select">
                  <option>Porte...</option>
                  <option>p</option>
                  <option>m</option>
                  <option>g</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridDescription">
                <Form.Control placeholder="Descrição" onChange={e => this.handleChangeDescription(e.target.value)}/>
              </Form.Group>

            <Form.Group as={Col} controlId="formGridContato">
              <Form.Control type="text" placeholder="Nome do Contato" onChange={e => this.handleChangeContact(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="email" placeholder="Email do contato" onChange={e => this.handleChangeEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formGridPhone1">
              <Form.Control placeholder="Celular" onChange={e => this.handleChangePhone1(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formGridPhone2">
              <Form.Control placeholder="Telefone" onChange={e => this.handleChangePhone2(e.target.value)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState"onChange={e => this.handleChangeState(e.target.value)}>
              <Form.Control as="select">
                <option>UF...</option>
                <option>SP</option>
              </Form.Control>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control placeholder="Cidade" onChange={e => this.handleChangeCity(e.target.value)}/>
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Adicionar
            </Button>
          </Container>
        </Form>
      </>
    );
  }
}

export default AddPet;
