import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Featured from '../Featured/Featured';
import Contact from '../Contact/Contact';
import Advertise from '../Advertise/Advertise';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Featured></Featured> */}
            <Categories></Categories>
            <Contact></Contact>
            <Advertise></Advertise>
        </div>
    );
};

export default Home;