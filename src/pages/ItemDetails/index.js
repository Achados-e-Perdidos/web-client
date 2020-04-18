import React, { useState } from 'react';

import AppBar from '../../components/AppBar';
import SimpleImageSlider from "react-simple-image-slider";

const ItemDetails = (props) => {

    const data = {
        imagem: [
            { url: "https://assets.xtechcommerce.com/uploads/images/medium/8ac8dad59d37f0929db3cd26b379a6be.jpg" },
            { url: "https://beariopreto.com.br/wp-content/uploads/2019/10/s-l16001.jpg" },
        ],
        titulo: 'Encontrei um relógio',
        descricao: 'Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Manduma pindureta quium dia nois paga. Suco de cevadiss deixa as pessoas mais interessantis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
        dataAchadoPerdido: '18/04/2020',
        categoria: 'Relógio',
        dataPostagem: '17/04/2020',
        userDetalhes: {
            nome: 'João das Couves',
            onde: 'Porto Alegre'
        }
    }

    const styleImage = {
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }


    const [ width, setWidth ] = useState(window.innerWidth);
    const [ height, setHeight ] = useState((window.innerHeight / 2));

    const calcularTamanhoSlider = () => {
        setWidth(window.innerWidth);
        setHeight((window.innerHeight / 2));
    }

    window.addEventListener('resize', calcularTamanhoSlider);

    return (
        <>
            <AppBar/>
            
            <SimpleImageSlider width={width} height={height} images={data.imagem} useGPURender={true} showNavs={(data.imagem.length > 1 ? true : false)} showBullets={false} style={styleImage} />

            <h2>{data.titulo}</h2>
            <p>{data.descricao}</p>
            <p>{data.dataAchadoPerdido}</p>

            <p>{data.categoria}</p>

            <p>{data.dataPostagem}</p>

            <p>{data.userDetalhes.nome}</p>
            <p>{data.userDetalhes.onde}</p>
            
        </>
    );

}

export default ItemDetails;