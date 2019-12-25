import React from 'react';
import { Form } from 'react-bootstrap';
import Switch from 'react-bootstrap-switch';

const ListItem = ({ item }) => {

    const handleSwitch = (elem, state) => {
        console.log('handleSwitch. elem:', elem);
        console.log('name:', elem.props.name);
        console.log('new state:', state);
    }

    return (
        <div key={item.id} className="list-item">
            <span className="time">{item.dt}</span>
            <span className="switch">
                <Switch onChange={(el, state) => handleSwitch(el, state)} name='test' />
                {/* <Form.Check
                    type="switch"
                    id="custom-switch"
                    label=""
                /> */}
            </span>
            <span className="timeframe">{item.tf}</span>
        </div>
    );
}

export default ListItem;