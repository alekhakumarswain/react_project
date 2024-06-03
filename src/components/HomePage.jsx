// HomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';
import '../styles/custom.scss';

const HomePage = () => {
  return (
    <div>
            <NavigationMenu/>
    <div className="container">
      <h1>Welcome to Online Test Assessment</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut suscipit consequat felis, in luctus ipsum convallis vitae. 
        Nullam vehicula, velit non consequat porta, tortor mauris commodo tortor, 
        nec dapibus dui libero at quam.
      </p>
      <p>
        Ready to take the test? Login now!
      </p>
      <Link to="/login" className="btn btn-primary">Login</Link>
    </div>
    </div>
  );
}

export default HomePage;
