import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { IoMdPaw } from 'react-icons/io'; // importação do icone pet de uma biblioteca
import { Wrapper, Container } from './styles';

import axios from 'axios';

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { username, email, password, confirmPassword, error } = this.state;
    if (!username || !email || !password || !confirmPassword) {
      this.setState({ error: 'Preencha todos os dados para Cadastrar' });
      console.log(error);

      if (password !== confirmPassword) {
        this.setState({ error: 'As Senhas não Conferem!' });
        console.log(error);
      }
    } else {
      try {
        await axios
          .post('https://petcode.herokuapp.com/api/users/', {
            username,
            email,
            password,
          })
          .then(response => {
            const login_res = response.data;

            return console.log(login_res);
          });
        this.props.history.push('/signin');
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
            <form onSubmit={this.handleSignUp}>
              <input
                type="text"
                placeholder="Usuário"
                onChange={e => this.setState({ username: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                onChange={e => this.setState({ email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Senha"
                onChange={e => this.setState({ password: e.target.value })}
              />
              <input
                type="password"
                placeholder="Confirme a Senha"
                onChange={e => this.setState({ confirmPassword: e.target.value })}
              />

              <button type="submit">Criar Conta</button>
              <Link to="/signin">Já tenho Cadastro</Link>
            </form>
          </Container>
        </Wrapper>
      </>
    );
  }
}

export default withRouter(SignUp);
