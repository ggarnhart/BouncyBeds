import React from 'react';

const Listing = ( props ) => {
    return(
        <div className="listing-card">
            <img className="listing-image" src={props.image} />
            <div className="listing-desc">
                <h4>{props.title}</h4>
                <p>${props.price}</p>
                <button className="book-button">Book Now</button>
            </div>
        </div>
    )
}

export default Listing;