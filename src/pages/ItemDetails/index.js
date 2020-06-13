import React, { useEffect, useState } from 'react';

import AppBar from '../../components/AppBar';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { format } from 'date-fns'
import { buscarItemPorID } from '../../services/api'


const ItemDetails = (props) => {

    const idItem = (props.location.state ? props.location.state.id : props.match.params.id);
    const ARRAY_TIPO = ['Achado', 'Perdido'],
    ARRAY_CATEGORIA = ['Chave', 'Carteira', 'Eletrônicos', 'Jóias e bijuterias', 'Relógio'];

    const [ data, setData ] = useState(undefined);

    useEffect(() =>{
        const carregarItem = async () => {
            let { data } = await buscarItemPorID(idItem);
            setData(data.data)
        }
        carregarItem();
    }, [idItem])

    useEffect(() =>{
        console.log(data)
    }, [data])

    const formatDate = (date) => {
        date = new Date(date)
        return format(new Date(date), 'dd/MM/yyyy')
    }

    return (
        <>
            <AppBar/>
            

            <main className="fixed-main-wrapper p-8 p-32">
                    { data && data._id ? <>
                        <Card className="card-detail">
                            <div className="main-wrapper">
                                
                                <div className="titulo-container">
                                    <div className="badge-container">
                                        <span className="badge-detail">#{ARRAY_TIPO[data.tipo]}</span>
                                        <span className="badge-detail">#{ARRAY_CATEGORIA[data.categoria]}</span>
                                    </div>
                                    <Typography style={{ 'fontWeight': "bold" }} variant="h4" component="h2">
                                        {data.titulo}
                                    </Typography>
                                    <span className="data-achado-perdido">{formatDate(data.dataAchadoPerdido)}</span>
                                </div>

                                <div className="descricao-container">
                                    <p className="descricao">{data.descricao}</p>
                                </div>

                                <div className="slide-images-container">
                                    { data && data.imagens ? 
                                        <>
                                            {
                                                data.imagens.map((url, i) => (
                                                    <div className="container-image" key={`container-image-${i}`}>
                                                        <img className="image" src={url} alt={`Imagem ${i+1} de ${data.imagens.length}`} key={`image-${i}`}/>
                                                    </div>
                                                ))
                                            }
                                        </>
                                    : null }
                                </div>
                            </div>
                        </Card>
                        <Card className="card-detail">
                            <div className="user-wrapper">
                                <div className="div">
                                    <label className="label">Usuário que postou:</label>
                                    <p className="text">{data.user?.name}</p>
                                </div>
                                <div className="div">
                                    <label className="label">E-mail de quem postou:</label>
                                    <p className="text">{data.user?.email}</p>
                                </div>
                                <div className="div">
                                    <label className="label">Telefone de quem postou:</label>
                                    <p className="text">+{data.user?.phone}</p>
                                </div>
                                <div className="div">
                                    <label className="label">Data da postagem:</label>
                                    <p className="text">{formatDate(data.createAt)}</p>
                                </div>
                            </div>
                        </Card>
                    </> 
                    : null}
            </main>
        </>
    );

}

export default ItemDetails;