import React from 'react';
import Banner from '../../components/BannerMain/index';
import Carousel from '../../components/Carousel/index';
import PageDefault from '../../components/PageDefault';
import dadosIniciais from '../../data/dados_iniciais.json';

useEffect(() => {
  if (window.location.href.includes('localhost')) {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return;
        };
        throw new Error('Não foi possível pegar os dados');
      });
}
}, []);

function Home() {

  return (



    <div>



      <PageDefault>



        <Banner

          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}

          url={dadosIniciais.categorias[0].videos[0].url}

          videoDescription="Um dos melhores curtas de 2019. Ganhador do prêmio melhor animação, no canal Short of the Week"



        />



        <Carousel

          ignoreFirstVideo



          category={dadosIniciais.categorias[0]}



        />



        <Carousel



          category={dadosIniciais.categorias[1]}



        />



        <Carousel



          category={dadosIniciais.categorias[2]}



        />



        <Carousel



          category={dadosIniciais.categorias[3]}



        />



        <Carousel



          category={dadosIniciais.categorias[4]}



        />



      </PageDefault>



    </div>



  );

}



export default Home;

