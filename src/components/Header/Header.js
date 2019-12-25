import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const Header = () => {
    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
                {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="profile" title="Profile">
                {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="contact" title="Contact">
                {/* <Sonnet /> */}
            </Tab>
        </Tabs>
    );
}

export default Header;