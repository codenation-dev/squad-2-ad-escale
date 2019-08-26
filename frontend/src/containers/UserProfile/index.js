import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosPerson } from 'react-icons/io';

import {
  handleUsername,
  handlePassword,
  handleToken,
  handleEmail,
  handleError,
} from '../SignIn/actions';

class UserProfile extends React.Component {
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

  handleGetUserLogged = async () => {
    try {
      if (this.props.token !== '') {
        console.log('logado');
      }
    } catch (e) {
      console.log('não logado');
    }
  };

  componentDidMount() {
    this.handleGetUserLogged();
  }

  render() {
    const { username, password, email, token, error } = this.props;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              {token !== ''
                ? `username: ${username}, password: ${password}, email: ${email}`
                : ''}
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="row">
            <div className="img-fluid rounded mx-auto d-block">
              <IoIosPerson class="img-fluid" size="135" />
              <h2>{username !== '' ? username : 'username'}</h2>
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
        </div> */}
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
    username: state.signin.username,
    password: state.signin.password,
    email: state.signin.email,
    token: state.signin.token,
    error: state.signin.error,
  };
}

/**
 * Função connect do redux, recepe o callback que mapeia o state pets da store do redux
 * e associa a uma prop de mesmo nome pets a este container (home).
 */
export default connect(mapStateToProps)(UserProfile);
