import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Rep from './components/rep components/Rep';
import Home from './components/customer components/Home';
import ListingPage from './components/customer components/ListingPage';
import Book from './components/customer components/Book';

function App() {
  return (
    <div>
      {/* <Rep /> */}
      {/* <Home /> */}
      {/* <ListingPage /> */}

      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/listings" component={ListingPage} />
        <Route exact path="/rep" component={Rep} />
        <Route  path="/book" component={Book} />
      </BrowserRouter>
    </div>
  );
}

export default App;
