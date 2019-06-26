import React from 'react';

const Review = ( props ) => {
    return(
        <div className="review-container">
            <img src={props.img} className="review-profile-pic" />
            <div className="review-text">
                <h4 className="no-margin">{props.guest}</h4>
                <p className="no-margin">{props.comment}</p>
            </div>
        </div>
    )
}

export default Review;