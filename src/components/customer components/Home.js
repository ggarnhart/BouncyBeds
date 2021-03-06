import React, { Component } from 'react';

class Home extends Component{
    render(){
        return(
            <div>
                <div className="landing">
                    <div className="call-floater">
                        <button className="call-button">
                            Call Us
                        </button>
                    </div>
                    <div className="form-div">
                        <h1>Find Your Castle.</h1>
                        <label htmlFor="location">WHERE</label>
                        <input className="form-input"  name="location" type="text" placeholder="Location" />

                        
                        <label htmlFor="checkin">Check-In</label>
                        <input type="date" name="checkin" />

                        <label htmlFor="checkout">Check-Out</label>
                        <input type="date" name="checkout"  />
                        
                        <label htmlFor="guests">Guests</label>
                        <input type="number" name="guests" placeholder="# of Bouncers" />
                        <a href="/listings" className="search-button">Search</a>
                        
                    </div>
                    <div className="footer-landing">
                        <div className="footer-container-landing">
                        <p className="no-margin">Copyright 2019</p>
                        <p className="no-margin">Made with <span role="img" aria-label="heart emoji">❤️</span> by Bandwidth</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;