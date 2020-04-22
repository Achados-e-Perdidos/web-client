import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import DatePickerInput from '../../components/DatePickerInput';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    buttonPublicar: {
        backgroundColor: '#218002',
        '&:hover': {
            backgroundColor: '#000000'
        },
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
});

const FormItemRegister = () => {

    const classes = useStyles();
    const [ categoria, setCategoria ] = useState('');

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("!oi")
    };

    return (
        <form className="form form-register-item" autoComplete="off" method="post" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControl variant="outlined" className="form-control">
                        <InputLabel id="input-categoria-label">Categoria</InputLabel>
                        <Select
                            labelId="input-categoria-label"
                            id="input-categoria"
                            value={categoria}
                            onChange={handleChangeCategoria}
                            style={{width: 300}}
                            label="Categoria"
                        >
                            <MenuItem value={30}>Chave</MenuItem>
                            <MenuItem value={30}>Carteira</MenuItem>
                            <MenuItem value={30}>Eletrônicos</MenuItem>
                            <MenuItem value={20}>Jóias e bijuterias</MenuItem>
                            <MenuItem value={10}>Relógio</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl className="form-control">
                        <TextField variant="outlined" id="input-titulo" label="Título"/>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl className="form-control">
                        <TextField multiline rows={4} variant="outlined" id="input-descricao" label="Descrição"/>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl className="form-control">
                        <DatePickerInput initialPickDate={new Date()} id={"data-achado-perdido"} label={"Data do Achado ou Perdido"} formatDate={'dd/MM/yyyy'} />
                    </FormControl>
                </Grid>

            </Grid>

            <Grid container spacing={2} direction="row" justify="flex-end" alignItems="flex-end">
                <Grid item>
                    <Button type="submit" variant="contained" color="primary" className={classes.buttonPublicar}>
                        Publicar
                    </Button>
                </Grid>
            </Grid>
            
            
        </form>

    );

};

export default FormItemRegister;