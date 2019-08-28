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
  const { token } = props;

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
        SignIn <span className="sr-only">(current)</span>
      </Link>
    );
  };

  const loggedDiv = () => {
    return (
      <Link to="/" className="nav-link">
        <div className="button" onClick={e => handleLogout(e)}>
          SignOut <span className="sr-only">(current)</span>
        </div>
      </Link>
    );
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              {token === '' ? nonLoggedDiv() : loggedDiv()}
            </li>
            <li className="nav-item active">
              <Link to="/signup" className="nav-link">
                SignUp <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/userprofile" className="nav-link">
                Meu Perfil <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

function mapStateToProps(state) {
  return {
    token: state.signin.token,
  };
}

export default connect(mapStateToProps)(Header);
