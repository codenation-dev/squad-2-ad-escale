import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { IoMdPaw } from 'react-icons/io'; // importação do icone pet de uma biblioteca

import {
  handleUsername,
  handlePassword,
  handleToken,
  handleEmail,
  handleError,
} from './actions';

class SignIn extends Component {
  handleChangeUsername = value => {
    this.props.dispatch(handleUsername(value));
  };
  handleChangePassword = value => {
    this.props.dispatch(handlePassword(value));
  };
  handleGetEmail = value => {
    this.props.dispatch(handleEmail(value));
  };
  handleGetToken = value => {
    this.props.dispatch(handleToken(value));
  };
  handleGetError = value => {
    this.props.dispatch(handleError(value));
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { username, password } = this.props;
    if (!username || !password) {
      this.handleGetError('Preencha todos os dados para logar');
    } else {
      try {
        await axios
          .post('https://petcode.herokuapp.com/api/users/login/', {
            username,
            password,
          })
          .then(response => {
            const results = response.data;
            this.handleGetEmail(results.email);
            this.handleGetToken(results.token);
            this.handleGetError('');
          });
        this.props.history.push('/');
      } catch (err) {
        this.handleGetError('Ocorreu um erro ao logar');
      }
    }
  };

  render() {
    const { username, password, error } = this.props;

    return (
      <>
        <div className="container">
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
            </div>
          </div>
          <div className="row">
            <div className="img-fluid rounded mx-auto d-block">
              <IoMdPaw class="img-fluid" size="135" />
              <h2>Pet Codes</h2>
            </div>
          </div>
          <div className="row" style={{ marginTop: '1rem' }}>
            <div className="col">
              <form onSubmit={this.handleSignIn}>
                <div className="row">
                  <div className="col">
                    <div class="form-group">
                      <input
                        className="form-control form-control-lg"
                        value={username}
                        required
                        type="username"
                        placeholder="Usuário"
                        onChange={e =>
                          this.handleChangeUsername(e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div class="form-group">
                      <input
                        className="form-control form-control-lg"
                        value={password}
                        required
                        type="password"
                        placeholder="Senha"
                        onChange={e =>
                          this.handleChangePassword(e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div class="form-group">
                      <button type="submit" class="btn btn-dark">
                        Login
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div class="form-group">
                      <Link to="/signup">Criar Conta</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.signin.username,
    password: state.signin.password,
    token: state.signin.token,
    email: state.signin.email,
    error: state.signin.error,
  };
}

export default connect(mapStateToProps)(withRouter(SignIn));
