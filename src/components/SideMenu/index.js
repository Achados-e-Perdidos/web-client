import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function SideMenu(props) {

    const { onClose } = props;

    const [heigth, setHeigth] = useState(0);
    const [width, setWidth] = useState(0);

    const getMaxHeigth = () => {
        setHeigth((window.innerHeight - document.getElementById('div-menu-father').offsetHeight) - 20);
        console.log(document.getElementById('div-menu-father').offsetHeight)
    }

    const getMaxWidth = () => {
        if(window.innerWidth < 768){
            setWidth('100%');
        } else {
            setWidth('40vw');
        }
    }

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const closeMenuPanel = (e) => {
        if(e.target === e.currentTarget){
            onClose();
        }
    }

    useEffect(() => {
        getMaxHeigth();
        getMaxWidth();
    }, [width, heigth]);

    return (
        <div id="menu-mask-panel" onClick={closeMenuPanel}>
            <div className="menu-panel" style={{height: heigth, width: width}}>
                <div>

                    <div>
                        <h3>Busque por alguma coisa</h3>
                        <div className="div-form-control">
                            <FormControl className="form-control">
                                <TextField variant="outlined" id="input-titulo" label="Palavra chave"/>
                            </FormControl>

                            <button>
                                Lupa
                            </button>

                        </div>
                        
                    </div>
                    <div>
                        <h3>Busca Avançada</h3>
                        <div className="div-form-control">
                            <FormControl variant="outlined" className="form-control">
                                <InputLabel id="input-tipo-label">Tipo</InputLabel>
                                <Select
                                    labelId="input-tipo-label"
                                    id="input-tipo"
                                    value={''}
                                    label="Tipo"
                                    error={false}
                                >
                                    <MenuItem value={0}>Estrou procurando o que foi achado</MenuItem>
                                    <MenuItem value={1}>Estrou procurando o que foi perdido</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="div-form-control">
                            <FormControl variant="outlined" className="form-control">
                                <InputLabel id="input-categoria-label">Categoria</InputLabel>
                                <Select
                                    labelId="input-categoria-label"
                                    id="input-categoria"
                                    value={'x'}
                                    label="Categoria"
                                    error={false}
                                >
                                    <MenuItem value={0}>Chave</MenuItem>
                                    <MenuItem value={1}>Carteira</MenuItem>
                                    <MenuItem value={2}>Eletrônicos</MenuItem>
                                    <MenuItem value={3}>Jóias e bijuterias</MenuItem>
                                    <MenuItem value={4}>Relógio</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="div-form-control">
                            <div className="half">
                                <FormControl variant="outlined" className="form-control">
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="De"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </FormControl>
                            </div>

                            <div className="half">
                                <FormControl variant="outlined" className="form-control">
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Até"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </FormControl>
                            </div>
                            
                        </div>

                        <div className="div-btn-busca-avancada">
                            <button>
                                Filtrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}