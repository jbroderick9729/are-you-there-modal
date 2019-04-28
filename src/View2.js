import React from 'react';
import './View2.css';

export default function View2(props) {
    return (
        <div>
            <h1>This is view 2</h1>
            <p>You've been redirected to this page due to inactivity</p>
            <button onClick={props.changeView}>Return to view 1</button>
        </div>
    )
}
