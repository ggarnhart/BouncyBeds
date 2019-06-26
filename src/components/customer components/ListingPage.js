import React from 'react';
import Listing from './Listing';
import Footer from './Footer';

const ListingPage = () => {

    var listingsOne = [
        {
            image: "./test.png",
            title: "Insane Bouncy Castle",
            price: 12
        },
        {
            image: "./home2.png",
            title: "Pretty Decent Bouncy Castle",
            price: 8
        },
        {
            image: "./home3.png",
            title: "Quiet Bouncy Castle Overlooking Calm Lake",
            price: 43
        }
    ]

    var listingsTwo = [
        {
            image: "./home4.png",
            title: "Pollination Nation",
            price: 2
        },
        {
            image: "./home5.png",
            title: "Spiritual Bouncy Castle in Mountains",
            price: 12
        },
        {
            image: "./home6.png",
            title: "Falling Water",
            price: 19
        }
    ]

    function renderListingsOne(){
        const allListings = listingsOne.map( listing => {
            return(
                <Listing
                    image = {listing.image}
                    title = {listing.title}
                    price = {listing.price}
                />
            );
        });
        return allListings;
    }
    function renderListingsTwo(){
        const allListings = listingsTwo.map( listing => {
            return(
                <Listing
                    image = {listing.image}
                    title = {listing.title}
                    price = {listing.price}
                />
            );
        });
        return allListings;
    }
    return(
        <div className="listing-bg">
            <div className="center-me">
                <div className="three-row">
                    {renderListingsOne()}
                </div>
                <div className="three-row">
                    {renderListingsTwo()}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ListingPage;