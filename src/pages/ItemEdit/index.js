import React, { useEffect, useState } from 'react';

import AppBar from '../../components/AppBar';
import FormItemRegister from '../../components/FormItemRegister';

import { buscarItemPorID } from '../../services/api'

import Typography from '@material-ui/core/Typography';


const ItemEdit = (props) => {

    const idItem = (props.location.state ? props.location.state.id : props.match.params.id);

    const [ data, setData ] = useState(undefined);

    useEffect(() =>{
        const carregarItem = async () => {
            let { data } = await buscarItemPorID(idItem);
            setData(data.data)
        }
        carregarItem();
    }, [idItem])

    useEffect(() =>{
    }, [data])

    return (
        <>
            <AppBar/>
            <main className="p-8 pt-32">
                <div className="welcome">
                    <Typography style={{ 'fontWeight': "bold" }} variant="h4" component="h2" >
                        O que você está publicando?
                    </Typography>
                </div>

                <div className="content-wrapper">
                    <FormItemRegister dataEdit={data} idItem={idItem}/>
                </div>
            </main>
        </>

    );

};

export default ItemEdit;