import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>BOM DIA!</h1>

      <Link to="/cadastro/categoria">
        Cadastro de categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
