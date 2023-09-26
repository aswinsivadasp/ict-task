import React from 'react';
import NavBar from './NavBar';
import '../components/Home.css'

const Home = () => {
  return (
    <div>
      <div className="navbar-container">
        <NavBar />
      </div>
      {/* The rest of your content */}
    </div>
  );
};

export default Home;
