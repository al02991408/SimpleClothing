import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to SimpleClothing</h1>
      <p>Your one-stop shop for unisex urban clothing.</p>
      <button onClick={() => alert('Explore our collection!')}>Shop Now</button>
    </div>
  );
};

export default HomePage;