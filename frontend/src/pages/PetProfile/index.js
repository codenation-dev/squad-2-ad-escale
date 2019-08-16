// pagina de perfil pet

import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdPaw, IoMdMail } from 'react-icons/io';
import { FaWhatsapp } from 'react-icons/fa';

import SwiftSlider from 'react-swift-slider';
import { Wrapper, Container } from './styles';

import Dog1 from './dog1.jpg';
import Dog2 from './dog2.jpg';
import Dog3 from './dog3.jpg';

const data = [
  {
    id: '1',
    src: Dog1,
  },
  {
    id: '2',
    src: Dog2,
  },
  {
    id: '3',
    src: Dog3,
  },
];

export default function PetProfile() {
  return (
    <>
      <Wrapper>
        <Container>
          <body>
            <header id="headerpetprofile">
              <h1>
                Pet Codes <IoMdPaw />
              </h1>
              <Link to="/signup">Cadastrar</Link>
              <Link to="/signin">Login</Link>
            </header>
            <br />
            <div id="divslider">
              <SwiftSlider data={data} height={250} />
            </div>
            <br />
            <div id="divpetprofile">
              <section id="section1">
                <h1>Rex</h1>
                <h3>Adoção</h3>
                <p>Adulto/Macho/Grande</p>
                <p>Disponivel para Adoção</p>
                <p>todas as vacinas em dia!!!</p>
              </section>
              <section id="section2">
                <h3>Contato do Anunciante</h3>
                <p>Rua Avenida, 01</p>
                <span>
                  <IoMdMail /> mail@petcodes
                </span>
                <br />
                <span>
                  <FaWhatsapp />
                  22-4444-3333
                </span>
              </section>
            </div>
            <br />
            <div>
              <h3>Informações</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <br />
            <footer id="footerpetprofile">
              <h3>Rua Pedro Américo, 32</h3>
              <h3>11-9999-8888</h3>
            </footer>
          </body>
        </Container>
      </Wrapper>
    </>
  );
}
