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
            trigger: '3',
          },
          {
            id: '5',
            message: 'Qual a sua idade?',
            trigger: 'age',
          },
          {
            id: 'age',
            user: true,
            trigger: '7',
            validator: value => {
              if (isNan(value)) {
                return 'valor deve ser numérico';
              } else if (value < 0) {
                return 'valor deve ser positivo';
              } else if (value > 120) {
                return `{value}? Come on!`;
              }
              return true;
            },
          },
          {
            id: '7',
            message: 'Ótimo, cheque o resumo das suas informações',
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
            message: 'Você gostaria de alterar algum campo?',
            trigger: 'update-question',
          },
          {
            id: 'update-question',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'update-yes' },
              { value: 'no', label: 'No', trigger: 'end-message' },
            ],
          },
          {
            id: 'update-yes',
            message: 'Qual campo você gostaria de alterar?',
            trigger: 'update-fields',
          },
          {
            id: 'update-fields',
            options: [
              { value: 'name', label: 'Nome', trigger: 'update-name' },
              { value: 'age', label: 'Idade', trigger: 'update-age' },
            ],
          },
          {
            id: 'update-name',
            update: 'name',
            trigger: '7',
          },
          {
            id: 'update-age',
            update: 'age',
            trigger: '7',
          },
          {
            id: 'end-message',
            message:
              'Obrigado, recebemos seus dados, assim que analisar retornaremos o contato, o prazo máximo é de 2 horas.',
          },
        ]}
      />
    );
  }
}

export default SimpleForm;
