import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AddPet extends Component {
  state = {};

  handleEachInputState = target => {
    this.setState({ [target.name]: target.value });
  };

  handleAddPet = async e => {
    e.preventDefault();
    const {
      name,
      city,
      state,
      description,
      contact_name,
      phone_1,
      category,
      pet_type,
      size,
      gender,
    } = this.state;

    const config = {
      headers: { Authorization: `token ${this.props.token}` },
    };

    try {
      console.log(this.state);
      await axios
        .post(
          'https://petcode.pythonanywhere.com/api/pet/',
          {
            name,
            city,
            state,
            description,
            contact_name,
            phone_1,
            category,
            pet_type,
            size,
            gender,
          },
          config,
        )
        .then(response => {
          const res = response.data;
        });
    } catch (e) {
      alert(e);
    }
  };

  render() {
    return (
      <>
        <form>
          <div className="form-row">
            <div class="form-group col-md-4">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Nome do pet"
              />
            </div>
            <div className="form-group col-md-2">
              <select
                name="category"
                class="form-control"
                onChange={this.handleEachOptionState}
              >
                <option selected>Categoria</option>
                <option value="1">Achado</option>
                <option value="2">Perdido</option>
                <option value="3">Adoção</option>
              </select>
            </div>
            <div className="form-group col col-md-2">
              <select id="pet_type" class="form-control">
                <option selected>Tipo</option>
                <option value="1">Gato</option>
                <option value="2">Cachorro</option>
                <option value="3">Outro</option>
                onChange={e => this.handleEachOneState(e.target)}
              </select>
            </div>
            <div className="form-group col col-md-2">
              <select id="size" class="form-control">
                <option selected>Porte</option>
                <option value="p">Pequeno</option>
                <option value="m">Médio</option>
                <option value="g">Grande</option>
                onChange={e => this.handleEachOneState(e.target)}
              </select>
            </div>
            <div className="form-group col col-md-2">
              <select id="gender" class="form-control">
                <option selected>Sexo</option>
                <option value="f">Fêmea</option>
                <option value="m">Macho</option>
                onChange={e => this.handleEachOneState(e.target)}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div class="form-group col">
              <textarea
                class="form-control"
                id="description"
                rows="2"
                placeholder="Detalhes do pet"
                onChange={e => this.handleEachOneState(e.target)}
              ></textarea>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <input
                type="text"
                class="form-control"
                id="contact_name"
                placeholder="Seu nome"
                onChange={e => this.handleEachOneState(e.target)}
              />
            </div>
            <div className="form-group  col-md-2">
              <input
                type="text"
                class="form-control"
                id="phone_1"
                placeholder="Seu telefone"
                onChange={e => this.handleEachOneState(e.target)}
              />
            </div>
            <div className="form-group col col-md-4">
              <input
                type="text"
                class="form-control"
                id="city"
                placeholder="Cidade"
                onChange={e => this.handleEachOneState(e.target)}
              />
            </div>
            <div className="form-group col col-md-2">
              <input
                type="text"
                class="form-control"
                id="state"
                placeholder="Estado"
                onChange={e => this.handleEachOneState(e.target)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="submit" class="btn btn-primary">
                Adicionar
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.signin.token,
  };
}

export default connect(mapStateToProps)(AddPet);
