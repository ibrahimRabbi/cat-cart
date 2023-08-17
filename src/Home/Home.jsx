import React from 'react';
import Category from './Category';
import Banner from './Banner';
import Arrival from './NewArrival';

const Home = () => {
    return (
        <main>
            <Banner/>
            <Category />
            <Arrival/>
         </main>
    );
};

export default Home;