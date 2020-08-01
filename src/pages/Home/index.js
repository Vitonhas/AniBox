import React from 'react';

import Banner from '../../components/BannerMain/index';

import Carousel from '../../components/Carousel/index';

import PageDefault from '../../components/PageDefault';

import dadosIniciais from '../../data/dados_iniciais.json';



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

      </PageDefault>



    </div>

  );

}



export default Home;

