import React from 'react';

import AppBar from '../../components/AppBar';
import FormItemRegister from '../../components/FormItemRegister';

import Typography from '@material-ui/core/Typography';


const ItemRegister = () => {

    return (
        <>
            <AppBar/>
            <main className="p-8 pt-32">
                <div className="welcome">
                    <Typography variant="h4" component="h2" >
                        Cadastre um item
                    </Typography>
                </div>

                <div className="content-wrapper">
                    <FormItemRegister/>
                </div>

            </main>
        </>

    );

};

export default ItemRegister;