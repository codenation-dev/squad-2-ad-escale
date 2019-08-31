import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class AddPet extends Component {
  state = {
    category: '',
    type: '',
  };

  handleSelect = target => {
    this.setState({ [target.name]: Number(target.value) });
  };

  handleEachOneState = target => {
    this.setState({ [target.name]: target.value });
  };

  handleSetImages = images => {
    this.setState({
      images: [...images],
    });
  };

  handlePostImages = (id, image) => {
    const formData = new FormData();
    formData.append('image', image);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Token ${this.props.token}`,
      },
    };

    axios
      .post(
        `https://petcode.pythonanywhere.com/api/pet/${id}/image-upload`,

        formData,

        config,
      )
      .catch(e => console.log(e));

    return <Redirect to="/" />;
  };

  handleAddPet = e => {
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

    axios
      .get('https://petcode.pythonanywhere.com/api/pet/')
      .then(res => {
        const result = res.data;
        const idx = result.length - 1;
        return result[idx].id;
      })
      .then(id => {
        axios
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
          .then(() => {
            images.map(image => {
              this.handlePostImages(id, image);
            });
          })
          .catch(e => {
            console.log(e);
          });
      });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleAddPet}>
          <div className="form-row">
            <div className="form-group col-md-4">
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
                className="form-control"
                onChange={e => this.handleSelect(e.target)}
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
                className="form-control"
                onChange={e => this.handleSelect(e.target)}
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
                className="form-control"
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
                className="form-control"
                onChange={e => this.handleEachOneState(e.target)}
              >
                <option selected>Sexo</option>
                <option value="f">Fêmea</option>
                <option value="m">Macho</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <textarea
                className="form-control"
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
                className="form-control"
                name="contact_name"
                placeholder="Seu nome"
                onChange={e => this.handleEachOneState(e.target)}
              />
            </div>
            <div className="form-group  col-md-2">
              <input
                type="tel"
                className="form-control"
                name="phone_1"
                placeholder="Seu telefone"
                onChange={e => this.handleEachOneState(e.target)}
              />
            </div>
            <div className="form-group col col-md-4">
              <input
                type="text"
                className="form-control"
                name="city"
                placeholder="Cidade"
                onChange={e => this.handleEachOneState(e.target)}
              />
            </div>
            <div className="form-group col col-md-2">
              <input
                type="text"
                className="form-control"
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
                onChange={e => this.handleSetImages(e.target.files)}
              />
            </div>
          </div>
          <div className="row" style={{ paddingTop: '1rem' }}>
            <div className="col">
              <button type="submit" className="btn btn-primary">
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
