import React, { Component } from 'react';

class CallCard extends Component {
    componentDidMount(){
        console.log(this.state);
    }
    state = {
        callActive: false
    }

    callClicked = () => {
        this.setState({ callActive: !this.state.callActive });
    }

    renderCallActive = () => {
        if(this.state.callActive){
            return(
                <div>
                    <p className="text-center">Call Active</p>
                    <button onClick={() => this.callClicked()} className="book-hangup-button">Hangup</button>
                </div>
            )
        }
        else{
            return(
                <div><button onClick={() => this.callClicked()} className="book-call-button">Call to Book</button></div>
            )
        }
    }

    render(){
        return(
            <div className="call-card">
                <h3>Your Rep:</h3>
                <p className="no-margin lighter">Jim</p>
                <img alt="profile of employee" src="https://randomuser.me/api/portraits/lego/1.jpg" className="call-area-rep"/>
                <br />
                {this.renderCallActive()}
            </div>
        )
    }
}

export default CallCard;