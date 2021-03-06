import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { IoIosPerson } from 'react-icons/io';
import Addpet from '../../components/addpet/index'

import {
  /*   handleUsername, */
  handleEmail,
  handlePassword,
  handleToken,
  handleError,
} from '../SignIn/actions';



class UserProfile extends React.Component {
  state = {
    show: false,
  }
  /*   handleChangeUsername = value => {
    this.props.dispatch(handleUsername(value));
  }; */
  handleGetEmail = value => {
    this.props.dispatch(handleEmail(value));
  };
  handleChangePassword = value => {
    this.props.dispatch(handlePassword(value));
  };
  handleGetToken = value => {
    this.props.dispatch(handleToken(value));
  };
  handleGetError = value => {
    this.props.dispatch(handleError(value));
  };

  handleGetUserLogged = async () => {
    try {
      if (this.props.token !== '') {
        console.log('logado');
      }
    } catch (e) {
      console.log('não logado');
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.handleGetError('A funcionalidade ainda não está implementada.');
  };

  componentDidMount() {
    this.handleGetUserLogged();
  }

  handleShow = e => {
    e.preventDefault();
    console.log(this.state.show)
    this.setState({show: true});
  };

  render() {
    const { email, token, error } = this.props;
    return (
      <>
        <div className="container">
          <div className="row">
            {token !== '' ? '' : <Redirect to="/signin" />}
          </div>
          <div className="row">
            <div className="img-fluid rounded mx-auto d-block">
              <IoIosPerson className="img-fluid" size="135" />
            </div>
          </div>
          <div className="row" style={{ padding: '1rem' }}>
            <div className="col">
              <form>
                <div className="form-group">
                  <label>E-mail:</label>
                  <input
                    value={email}
                    type="text"
                    className="form-control"
                    readonly
                  />
                </div>
                {/*                 <div className="form-group">
                  <label>Username:</label>
                  <input value={username} className="form-control" readonly />
                </div> */}

                <div className="form-group">
                  <label>Senha atual:</label>
                  <input type="password" className="form-control" readonly />
                </div>
                <div className="form-group">
                  <label forHTML="exampleFormControlSelect2">Nova senha</label>
                  <input type="password" className="form-control" readonly />
                </div>
                <div className="form-group">
                  <label forHTML="exampleFormControlSelect2">
                    Confirmar nova senha:
                  </label>
                  <input type="password" className="form-control" readonly />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="newsletter"
                    id="exampleRadios2"
                    value="opcao2"
                  />
                  <label
                    className="form-check-label"
                    forHTML="exampleRadios2"
                    style={{ marginBottom: '1rem' }}
                  >
                    Desejo receber newsletter de Petcodes.com.br
                  </label>
                </div>

                <button
                  onClick={e => this.handleSubmit(e)}
                  type="submit"
                  className="btn btn-primary"
                  style={{ marginBottom: '1rem' }}
                >
                  Enviar
                </button>
              </form>
              <div className="row" style={{ marginTop: '1rem' }}>
                <div className="col">
                  {error !== '' ? (
                    <div
                      class="alert alert-danger alert-dismissible fade show"
                      role="alert"
                    >
                      {error}
                      <button
                        type="button"
                        class="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  ) : (
                    ''
                  )}

                  <button
                    onClick={e => this.handleShow(e)}
                    type="submit"
                    className="btn btn-primary"
                    style={{ marginBottom: '1rem' }}
                    >
                    + Add Pet
                  </button>
                </div>
              </div>
            </div>
          </div>
            {this.state.show && <Addpet />}
        </div>
      </>
    );
  }
}

/**
 * Callback que devolve, mapeia um objeto pets para props deste container (home),
 * vindo do state pets da store do redux
 */
function mapStateToProps(state) {
  return {
    email: state.signin.email,
    password: state.signin.password,
    token: state.signin.token,
    error: state.signin.error,
  };
}

/**
 * Função connect do redux, recepe o callback que mapeia o state pets da store do redux
 * e associa a uma prop de mesmo nome pets a este container (home).
 */
export default connect(mapStateToProps)(UserProfile);
