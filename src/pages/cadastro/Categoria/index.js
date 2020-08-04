import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Buttons';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresInciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values } = useForm(valoresInciais);

  const [categorias, setCategorias, clearForm] = useState([]);

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria:</h1>
      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          values.titulo,
          values.descricao,
          values.cor,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria: "
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição da Categoria: "
          tag="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>OK!</Button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
            ;
          </li>
        ))}
      </ul>
    </PageDefault>
  );
}

export default CadastroCategoria;
