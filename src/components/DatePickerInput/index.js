import React, { useState, useEffect } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

const DatePickerInput = (props) => {

    const { id, label, formatDate, initialPickDate, handleChange, error, disableFuture, disablePast } = props;

    const [selectedDate, setSelectedDate] = useState(initialPickDate);
    
    const handleChangeDate = (value) => {
        setSelectedDate(value);
        handleChange(value)
    }

    useEffect(() => {
        handleChange(document.getElementById(`${id}`).value);
    }, []);

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableFuture={disableFuture || false}
                disablePast={disablePast || false}
                error={error}
                style={{width: 300}}
                disableToolbar
                variant="inline"
                inputVariant="outlined"
                format={formatDate}
                margin="normal"
                id={id}
                label={label}
                value={selectedDate}
                onChange={handleChangeDate}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );
};

export default DatePickerInput;