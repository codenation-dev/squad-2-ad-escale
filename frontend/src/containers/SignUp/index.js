import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { IoMdPaw } from 'react-icons/io'; // importação do icone pet de uma biblioteca
import { Wrapper, Container } from './styles';

import axios from 'axios';

class SignUp extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
    invalidPasswordError: '',
  };

  handleSignUp = async e => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      email,
      password,
      confirmPassword,
      error,
    } = this.state;
    if (!first_name || !last_name || !email || !password || !confirmPassword) {
      this.setState({ error: 'Preencha todos os dados para Cadastrar' });
      console.log(error);

      if (password !== confirmPassword) {
        this.setState({ error: 'As Senhas não Conferem!' });
        console.log(error);
      }
    } else {
      try {
        await axios
          .post('https://petcode.pythonanywhere.com/api/users/', {
            email,
            password,
            first_name,
            last_name,
          })
          .then(response => {
            const login_res = response.data;

            return console.log(login_res);
          });
        this.props.history.push('/signin');
      } catch (err) {
        console.log(err);
        /* if (err && err.response) {
          const invalidPasswordError =
            err.response.data && err.response.data.password[0];
          return this.setState({ invalidPasswordError });
        }
        return this.setState({ error: err }); */
      }
    }
  };
  render() {
    const { invalidPasswordError } = this.state;
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
                required
                type="text"
                placeholder="Primeiro Nome"
                onChange={e => this.setState({ first_name: e.target.value })}
              />
              <input
                required
                type="text"
                placeholder="Sobrenome"
                onChange={e => this.setState({ last_name: e.target.value })}
              />
              <input
                required
                type="email"
                placeholder="E-mail"
                onChange={e => this.setState({ email: e.target.value })}
              />
              <input
                required
                type="password"
                placeholder="Senha"
                onChange={e =>
                  this.setState({
                    password: e.target.value,
                    invalidPasswordError: '',
                  })
                }
              />
              <input
                required
                type="password"
                placeholder="Confirme a Senha"
                onChange={e =>
                  this.setState({
                    confirmPassword: e.target.value,
                    invalidPasswordError: '',
                  })
                }
              />

              <span style={{ color: 'red' }}>{invalidPasswordError}</span>
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
