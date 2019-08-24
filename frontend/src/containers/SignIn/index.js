import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { IoMdPaw } from 'react-icons/io'; // importação do icone pet de uma biblioteca
import { Wrapper, Container } from './styles';

import axios from 'axios';

class SignIn extends Component {
  state = {
    username: '',
    password: '',
    error: '',
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { username, password } = this.state;
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

            return console.log(login_res);
          });
        this.props.history.push('/');
      } catch (err) {
        console.log(err);
        this.setState({ error: 'Ocorreu um erro ao logar' });
      }
    }
  };
  render() {
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
                required
                type="username"
                placeholder="Usuário"
                onChange={e => this.setState({ username: e.target.value })}
              />
              <input
                required
                type="password"
                placeholder="Senha"
                onChange={e => this.setState({ password: e.target.value })}
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

export default withRouter(SignIn);
