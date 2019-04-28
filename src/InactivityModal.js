import React from 'react'
import './InactivityModal.css';

export default function InactivityModal(props) {
    return (
        <div className="modal">
            <p>Are you still there?</p>
            <button onClick={props.resetCount}>I'm still here</button>
        </div>
    )
}

