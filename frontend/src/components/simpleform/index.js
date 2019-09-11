import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Review from '../review';

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Qual é o seu nome?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '5',
          },
          {
            id: '5',
            message: 'Qual a seu telefone?',
            trigger: 'tel',
          },
          {
            id: 'tel',
            user: true,
            trigger: 'help',
          },
          {
            id: 'help',
            message: 'Como podemos ajudar?',
            trigger: 'msg',
          },
          {
            id: 'msg',
            user: true,
            trigger: 'review',
          },
          {
            id: 'review',
            component: <Review />,
            asMessage: true,
            trigger: 'update',
          },
          {
            id: 'update',
            message: 'Gostaria de alterar alguma coisa?',
            trigger: 'update-question',
          },
          {
            id: 'update-question',
            options: [
              { value: 'yes', label: 'Sim', trigger: 'update-yes' },
              { value: 'no', label: 'Não', trigger: 'end-message' },
            ],
          },
          {
            id: 'update-yes',
            message: 'Qual campo?',
            trigger: 'update-fields',
          },
          {
            id: 'update-fields',
            options: [
              { value: 'name', label: 'Nome', trigger: 'update-name' },
              { value: 'tel', label: 'Telefone', trigger: 'update-tel' },
              { value: 'msg', label: 'Mensagem', trigger: 'update-msg' },
            ],
          },
          {
            id: 'update-name',
            update: 'name',
            trigger: 'review',
          },
          {
            id: 'update-tel',
            update: 'tel',
            trigger: 'review',
          },
          {
            id: 'update-msg',
            update: 'msg',
            trigger: 'review',
          },
          {
            id: 'end-message',
            message:
              'Perfeito, recebemos seus dados e retornaremos o contato em até 1 hora!',
          },
        ]}
      />
    );
  }
}

export default SimpleForm;
