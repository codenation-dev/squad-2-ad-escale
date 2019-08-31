import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AddPet extends Component {
  state = {};

  handleEachOneState = e => {
    this.setState({ [e.name]: e.value });
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
                class="form-control"
                id="name"
                placeholder="Nome do pet"
              />
            </div>
            <div className="form-group col-md-2">
              <select id="category" class="form-control">
                <option selected>Categoria</option>
                <option value="">Achado</option>
                <option value="">Perdido</option>
                <option value="">Adoção</option>
              </select>
            </div>
            <div className="form-group col col-md-2">
              <select id="pet_type" class="form-control">
                <option selected>Tipo</option>
                <option value="">Gato</option>
                <option value="">Cachorro</option>
                <option value="">Outro</option>
              </select>
            </div>
            <div className="form-group col col-md-2">
              <select id="size" class="form-control">
                <option selected>Porte</option>
                <option value="">Pequeno</option>
                <option value="">Médio</option>
                <option value="">Grande</option>
              </select>
            </div>
            <div className="form-group col col-md-2">
              <select id="gender" class="form-control">
                <option selected>Sexo</option>
                <option value="">Fêmea</option>
                <option value="">Macho</option>
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
              />
            </div>
            <div className="form-group  col-md-2">
              <input
                type="text"
                class="form-control"
                id="phone_1"
                placeholder="Seu telefone"
              />
            </div>
            <div className="form-group col col-md-4">
              <input
                type="text"
                class="form-control"
                id="city"
                placeholder="Cidade"
              />
            </div>
            <div className="form-group col col-md-2">
              <input
                type="text"
                class="form-control"
                id="state"
                placeholder="Estado"
              />
            </div>
            {/* <div className="form-row">
              <div class="form-group col-md-8">
                <div className="button">
                  <input type="file" id="multi" multiple />
                </div>
              </div>
            </div> */}
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
