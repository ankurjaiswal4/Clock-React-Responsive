import React from 'react';
import Header from '../components/Header/Header';
import Clock from '../components/Clock/Clock';
import List from '../components/List/List';

const Home = (props) => {
    return (
        <>
            <Header></Header>
            <Clock></Clock>
            <List></List>
        </>
    )
}

export default Home;