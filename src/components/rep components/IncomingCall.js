import React, { Component } from 'react';

class IncomingCall extends Component{
    render(){
        return(
            <div className="incoming-call">
                <div className="call-info">
                    <img src="https://randomuser.me/api/portraits/lego/7.jpg" className="call-profile" />
                    <div className="call-info-call">
                    <p className="no-margin">call from</p>
                    <h5 className="no-margin">Josh</h5>
                    </div>
                </div>
                <br></br>
                <div className="incoming-call-buttons">
                        <button className="answer">Answer</button>
                        <button className="decline">Decline</button>
                </div>
            </div>
        )
    }
}

export default IncomingCall;