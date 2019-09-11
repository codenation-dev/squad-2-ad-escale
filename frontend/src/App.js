import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header';
import Footer from './components/footer';
import ChatBot from './components/chatbot';

function App() {
  return (
    /**
     * Provider é o componente pai que vai abrigar a store
     * e encapsular toda a aplicação para permitir que todos os componentes
     * possam utiliza-lá
     */
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <Footer />
        <ChatBot />
      </Router>
    </Provider>
  );
}

export default App;
