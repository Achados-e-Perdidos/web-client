import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '../ItemCard';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
}));

const FeedItens = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} direction="row" justify="flex-start" alignItems="stretch" style={{maxWidth: 1600, margin: 'auto'}} >
                <Grid item xs={12} sm={6} lg={3} md={4}>
                    <Card />
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={4}>
                    <Card />
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={4}>
                    <Card />
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={4}>
                    <Card />
                </Grid>
            </Grid>
        </div>
    );

}

export default FeedItens;