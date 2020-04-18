import React from 'react';

import AppBar from '../../components/AppBar';
import FormItemRegister from '../../components/FormItemRegister';

const ItemRegister = () => {

    return (
        <>
            <AppBar/>
            <main className="p-8">
                <h1>Cadastre um item</h1>
                <FormItemRegister/>

            </main>
        </>

    );

};

export default ItemRegister;