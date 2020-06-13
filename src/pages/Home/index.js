import React from 'react';

import AppBar from '../../components/AppBar';
import FeedItens from '../../components/FeedItens';

const Home = (props) => {

    return (
        <>
            <AppBar/>
            <main className="fixed-main-wrapper p-8 pt-32">
                <FeedItens/>
            </main>
        </>
    );

}

export default Home;