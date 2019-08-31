import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AddPet extends Component {
  state = {};

  // a

  handleEachOneState = target => {
    console.log(target);
    this.setState({ [target.name]: target.value });
  };

  handleGetID = async e => {
    e.preventDefault();
    this.setState({
      images: [...e.target.files],
    });
    try {
      await axios
        .get('https://petcode.pythonanywhere.com/api/pet/')
        .then(res => {
          const result = res.data;
          const idx = result.length - 1;
          this.setState({
            id: result[idx].id,
          });
        });
    } catch (e) {
      alert(e);
    }
  };

  handlePostImages = async image => {
    const config = {
      headers: { Authorization: `token ${this.props.token}` },
    };

    await axios.post(
      `https://petcode.pythonanywhere.com/api/pet/${this.state.id}/image-upload`,
      {
        image,
      },
      config,
    );
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
      images,
    } = this.state;

    const config = {
      headers: { Authorization: `token ${this.props.token}` },
    };

    //Cadastrando o pet
    try {
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
        .then(
          images.map(image => {
            this.handlePostImages(image);
          }),
        );
    } catch (e) {
      alert(e);
    }
    // Consultando o ultimo id do pet
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleAddPet}>
          <div className="form-row">
            <div class="form-group col-md-4">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Nome do pet"
                onChange={e => this.handleEachOneState(e.target)}
              />
            </div>
            <div className="form-group col-md-2">
              <select
                name="category"
                class="form-control"
                onChange={e => this.handleEachOneState(e.target)}
              >
                <option selected>Categoria</option>
                <option value="1">Achado</option>
                <option value="2">Perdido</option>
                <option value="3">Adoção</option>
              </select>
            </div>
            <div className="form-group col col-md-2">
              <select
                name="pet_type"
                class="form-control"
                onChange={e => this.handleEachOneState(e.target)}
              >
                <option selected>Tipo</option>
                <option value="1">Gato</option>
                <option value="2">Cachorro</option>
                <option value="3">Outro</option>
              </select>
            </div>
            <div className="form-group col col-md-2">
              <select
                name="size"
                class="form-control"
                onChange={e => this.handleEachOneState(e.target)}
              >
                <option selected>Porte</option>
                <option value="p">Pequeno</option>
                <option value="m">Médio</option>
                <option value="g">Grande</option>
              </select>
            </div>
            <div className="form-group col col-md-2">
              <select
                name="gender"
                class="form-control"
                onChange={e => this.handleEachOneState(e.target)}
              >
                <option selected>Sexo</option>
                <option value="f">Fêmea</option>
                <option value="m">Macho</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div class="form-group col">
              <textarea
                class="form-control"
                name="description"
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
                name="contact_name"
                placeholder="Seu nome"
                onChange={e => this.handleEachOneState(e.target)}
              />
            </div>
            <div className="form-group  col-md-2">
              <input
                type="text"
                class="form-control"
                name="phone_1"
                placeholder="Seu telefone"
                onChange={e => this.handleEachOneState(e.target)}
              />
            </div>
            <div className="form-group col col-md-4">
              <input
                type="text"
                class="form-control"
                name="city"
                placeholder="Cidade"
                onChange={e => this.handleEachOneState(e.target)}
              />
            </div>
            <div className="form-group col col-md-2">
              <input
                type="text"
                class="form-control"
                name="state"
                placeholder="Estado"
                onChange={e => this.handleEachOneState(e.target)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="file"
                name="filefield"
                multiple="multiple"
                onChange={e => this.handleAddImages(e)}
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
          <div className="row">
            <div className="col">
              <button
                onClick={e => this.handleAddImages(e)}
                class="btn btn-primary"
              >
                Adicionar fotos
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
