import "./callArea.css";
import React, { Component } from 'react';
import IncomingCall from './IncomingCall';

class CallArea extends Component {
    render(){
        return(
            <div className="fullHeight callArea">
                <IncomingCall />
            </div>
        )
    }
}

export default CallArea;