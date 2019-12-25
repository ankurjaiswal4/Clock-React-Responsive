import React, { useState } from 'react';
import ListItem from './ListItem/ListItem';

const List = () => {

    const [list, useList] = useState([
        { id: 1, name: 'Test1', dt: '24 Dec 2019', tf: 'M,T,W,T,F,S,S' },
        { id: 2, name: 'Test2', dt: '25 Dec 2019', tf: 'M,T,W,T,F,S,S' },
        { id: 3, name: 'Test3', dt: '26 Dec 2019', tf: 'M,T,W,T,F,S,S' }
    ]);

    return (
        <div className="list">
            {
                list.map((item) =>
                    <ListItem item={item}></ListItem>
                )
            }
        </div>
    );
}

export default List;