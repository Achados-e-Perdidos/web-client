import React from 'react';
import Routes from './routes/index';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const App = () => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Routes />
    </MuiPickersUtilsProvider>
);

export default App;