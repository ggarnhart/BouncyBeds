import React from 'react';
import Listing from './Listing';

const ListingPage = () => {
    return(
        <div>
            <div>
                <Listing image="https://images.unsplash.com/photo-1558980664-1db506751c6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" title="Beautiful Bouncy Castle" price="25" />
            </div>
        </div>
    )
}

export default ListingPage;