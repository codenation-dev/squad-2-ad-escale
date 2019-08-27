import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { IoMdPaw } from 'react-icons/io'; // importação do icone pet de uma biblioteca

import {
  /* handleUsername, */
  handleEmail,
  handlePassword,
  handleToken,
  handleError,
} from './actions';

class SignIn extends Component {
  handleChangeEmail = value => {
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

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.props;
    if (!email || !password) {
      this.handleGetError('Preencha todos os dados para logar');
    } else {
      try {
        await axios
          .post('https://petcode-v1.herokuapp.com/api/users/login/', {
            email,
            password,
          })
          .then(response => {
            const results = response.data;
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
    const { email, password, error } = this.props;

    return (
      <>
        <div className="container">
          <div className="row" style={{ marginTop: '1rem' }}>
            <div className="col">
              {error !== '' ? (
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  {error}
                  <button
                    type="button"
                    className="close"
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
              <IoMdPaw className="img-fluid" size="135" />
              <h2>Pet Codes</h2>
            </div>
          </div>
          <div className="row" style={{ marginTop: '1rem' }}>
            <div className="col">
              <form onSubmit={this.handleSignIn}>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <input
                        className="form-control form-control-lg"
                        value={email}
                        required
                        type="e-mail"
                        placeholder="e-mail"
                        onChange={e => this.handleChangeEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
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
                    <div className="form-group">
                      <button type="submit" className="btn btn-dark">
                        Login
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
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
    email: state.signin.email,
    password: state.signin.password,
    token: state.signin.token,
    error: state.signin.error,
  };
}

export default connect(mapStateToProps)(withRouter(SignIn));
