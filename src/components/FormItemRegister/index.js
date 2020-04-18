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
        background: 'linear-gradient(45deg,  rgba(34,126,34,1) 3.8%, rgba(99,162,17,1) 87.1%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    buttonCancelar: {
        background: 'linear-gradient(45deg, #711f1c 0%, #b31217 51%, #dc0700 100%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    },
});

const FormItemRegister = () => {

    const classes = useStyles();
    const [ categoria, setCategoria ] = useState('');

    const handleChangeCategoria = (event) => {
        setCategoria(event.target.value);
    };

    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControl>
                        <TextField variant="outlined" id="input-titulo" label="Título"/>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl>
                        <TextField multiline variant="outlined" id="input-descricao" label="Descrição"/>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl variant="outlined">
                        <InputLabel id="input-categoria-label">Categoria</InputLabel>
                        <Select
                            labelId="input-categoria-label"
                            id="input-categoria"
                            value={categoria}
                            onChange={handleChangeCategoria}
                            autoWidth
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
                    <FormControl>
                        <DatePickerInput initialPickDate={new Date()} id={"data-achado-perdido"} label={"Data do Achado ou Perdido"} formatDate={'dd/MM/yyyy'} />
                    </FormControl>
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" className={classes.buttonCancelar}>
                Cancelar
            </Button>
            <Button variant="contained" color="primary" className={classes.buttonPublicar}>
                Publicar
            </Button>
        </form>

    );

};

export default FormItemRegister;