import React, { useState } from 'react';

import AppBar from '../../components/AppBar';

import Typography from '@material-ui/core/Typography';

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

    return (
        <>
            <AppBar/>

            <main className="p-8 p-32">
                
                <div className="wrapper side-wrapper">
                    <Typography style={{ 'font-weight': "bold" }} variant="h4" component="h2">
                        {data.titulo}
                    </Typography>
                    <span className="category">{data.categoria}</span>
                    <p className="description">{data.descricao}</p>
                    <span className="data-achado-perdido">{data.dataAchadoPerdido}</span>

                    <p>{data.dataPostagem}</p>

                </div>

                <div className="user-wrapper">
                    <p>{data.userDetalhes.nome}</p>
                    <p>{data.userDetalhes.onde}</p>
                </div>
                
            </main>
            

            
            
        </>
    );

}

export default ItemDetails;