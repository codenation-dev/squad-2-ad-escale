import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  handleEmail,
  handlePassword,
  handleToken,
} from '../../containers/SignIn/actions';
/* Componente cabeçalho, carrega logotipo, main links, componente de busca geral no site
 link para se inscrever e fazer login no site
 
 Componentes: 
 -Logotipo
 -Campo de Busca Geral no Site(igual o recipes, busca abrangente com rotas inclusive)
 -SignIn
 -SignUp

 */

const Header = props => {
  const { token, email } = props;

  const handleChangeEmail = value => {
    props.dispatch(handleEmail(value));
  };
  const handleChangePassword = value => {
    props.dispatch(handlePassword(value));
  };
  const handleChangeToken = value => {
    props.dispatch(handleToken(value));
  };

  const handleLogout = () => {
    handleChangeEmail('');
    handleChangePassword('');
    handleChangeToken('');
  };

  const nonLoggedDiv = () => {
    return (
      <Link to="/signin" className="nav-link">
        <button className="btn btn-outline-success my-2 my-sm-0">Login</button>
        <span className="sr-only">(current)</span>
      </Link>
    );
  };

  const loggedDiv = () => {
    return (
      <div className="dropdown">
        <button
          className="btn btn-outline-success my-2 my-sm-0 dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {email}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link to="/userprofile" className="dropdown-item">
            Perfil
          </Link>
          <Link to="/" className="dropdown-item" onClick={e => handleLogout(e)}>
            Sair
          </Link>
        </div>
      </div>
    );
  };

  const myProfile = () => {
    return <></>;
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand" style={{ paddingLeft: '20px' }}>
          Petcodes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <form className="form-inline my-2 my-lg-0">
            {token === '' ? nonLoggedDiv() : loggedDiv()}
          </form>
        </div>
      </nav>
    </>
  );
};

function mapStateToProps(state) {
  return {
    token: state.signin.token,
    email: state.signin.email,
  };
}

export default connect(mapStateToProps)(Header);
