import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { IoMdPaw } from 'react-icons/io'; // importação do icone pet de uma biblioteca
import { Wrapper, Container } from './styles';
import {
  handleChangeUsername,
  handleChangePassword,
  handleGetToken,
} from './actions';

import axios from 'axios';

class SignIn extends Component {
  state = {
    username: '',
    password: '',
    token: '',
    error: '',
  };

  handleChangeUsername = value => {
    this.props.dispatch(handleChangeUsername(value));
  };

  handleChangePassword = value => {
    this.props.dispatch(handleChangePassword(value));
  };

  handleGetToken = value => {
    this.props.dispatch(handleGetToken(value));
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { username, password } = this.props;
    if (!username || !password) {
      this.setState({ error: 'Preencha todos os dados para logar' });
    } else {
      try {
        await axios
          .post('https://petcode.herokuapp.com/api/users/login/', {
            username,
            password,
          })
          .then(response => {
            const login_res = response.data;
            this.props.dispatch(handleGetToken(login_res.token));
            //this.setState({ ...this.state, token: login_res.token });

            return this.state.token;
          });
        //this.props.history.push('/');
      } catch (err) {
        console.log(err);
        this.setState({ error: 'Ocorreu um erro ao logar' });
      }
    }
  };
  render() {
    console.log(this.props);
    const { username, password, loading } = this.props;
    return (
      <>
        <Wrapper>
          <Container>
            <h1>
              <IoMdPaw size="135" />
              <h2>Pet Codes</h2>
            </h1>
            <form onSubmit={this.handleSignIn}>
              <input
                value={username}
                required
                type="username"
                placeholder="Usuário"
                onChange={e => this.handleChangeUsername(e.target.value)}
              />
              <input
                value={password}
                required
                type="password"
                placeholder="Senha"
                onChange={e => this.handleChangePassword(e.target.value)}
              />

              <button type="submit">Login</button>
              <Link to="/signup">Criar Conta</Link>
            </form>
          </Container>
        </Wrapper>
      </>
    );
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    username: state.signin.username,
    password: state.signin.password,
    loading: state.loading,
  };
}

export default connect(mapStateToProps)(withRouter(SignIn));
