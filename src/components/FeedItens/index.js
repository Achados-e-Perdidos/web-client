import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '../ItemCard';
import Grid from '@material-ui/core/Grid';

import { buscarTodosItens } from '../../services/api'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
}));

const FeedItens = () => {

    const classes = useStyles();

    const [ data, setData ] = useState([]);

    const carregarItens = async () => {
        let { data } = await buscarTodosItens();
        setData(data.data)
    }

    useEffect(() =>{
        if(!data.length){
            carregarItens();
        }
    }, [data])
    
    return (
        <div className={classes.root}>
            <Grid container spacing={3} direction="row" justify="flex-start" alignItems="stretch">
                {
                    data.length ? 
                    <>
                        {
                            data.map((item, index )=> (
                                <Grid item xs={12} sm={6} lg={3} md={4} key={`grid-item-${index}`}>
                                    <Card key={`card-item-${index}`} data={item} />
                                </Grid>
                            ))
                        }
                    </> 
                    : <h1>CARREGANDO</h1>
                }
                
            </Grid>
        </div>
    );

}

export default FeedItens;