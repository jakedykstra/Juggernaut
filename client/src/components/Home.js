import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Dashboard from './dashboard/Dashboard'


const Home = () => {
    return (
      <div>
        <Header />
        <Dashboard />
        <Footer />
      </div>
    );
  };
  
  export default Home;

  // this page will have a graph of workouts and weight lifted, three lines for power three
  // below will be number of days completed and total volume lifted

  // below the graph will be daily tips
  // to the right side of the graph will be current maxes and training maxes. There will be an update button for if any maxes have changed