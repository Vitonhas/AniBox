import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.instagram.com/dotonpro/">
        <img src="https://fontmeme.com/permalink/200728/2a87ffcc6d83d6ee0623dc4f3a3e1d70.png" alt="Logo Doton"  width="150px"/>
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
