import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <Categories></Categories>
        </div>
    );
};

export default Home;