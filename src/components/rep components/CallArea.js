import "./callArea.css";
import React, { Component } from 'react';
import IncomingCall from './IncomingCall';
import Employee from './Employee';
class CallArea extends Component {
    state = { callActive: false, incomingCall: false }

    renderIncomingCall(){
        if(this.state.incomingCall === true){
            // console.log("hi");
            return(
                <div>
                    <div className="incoming-call-div">
                        <IncomingCall />
                    </div>
                    <div className="rep-call-area">
                        
                    </div>
                </div>
            ) 
            
        }
        else{
           return(
                <div>
                    <div className="incoming-call-div">
                    
                    </div>
                    <div className="rep-call-area">
                        <button className="answer" onClick={this.incomingCall}>Simulate Incoming Call</button>      
                    </div>
                </div>
           )
        }
    }
    

    incomingCall = () => {
        if(!this.state.incomingCall){
            this.setState({ incomingCall: true });
        }
        else{
            this.setState({ incomingCall: false });
        }
    }


    renderRep(){
        if(this.props.manager === "false"){  
            return(   
                <div>
                    {this.renderIncomingCall()}
                </div>
            );
        }
    }

    renderControlArea(){
        if(this.props.manager === "true"){
            return(
                <div className="manager-container">
                    <h1>Hi, Mr. Manager</h1>
                    <p>Current company status is <span className="heavier">active</span>.</p>
                    <p>There is currently <span className="heavier">1</span> active call.</p>
                    <br />
                    <div className="manager-call-grid flex-row">
                        <Employee name="Jim Fletcherson" active="true"/>
                        <Employee name="Joe Flatstone" active="false"/>
                    </div>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="fullHeight callArea">
                {this.renderRep()}
                {this.renderControlArea()}
            </div>
        )
    }
}

export default CallArea;