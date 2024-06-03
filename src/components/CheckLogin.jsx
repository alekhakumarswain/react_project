import React, { useState, useEffect } from 'react';
import userData from '../data/users.json'; // Importing user data from data.json

const CheckLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  // Function to check login status and fetch user name
  const checkLoginStatus = () => {
    // Your login logic here
    // For example, check if the user is authenticated from localStorage, cookies, or API
    const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Example using localStorage
    setIsLoggedIn(userLoggedIn);

    // If user is logged in, fetch user name from data.json
    if (userLoggedIn) {
      const registrationNumber = localStorage.getItem('registrationNumber'); // Assuming registrationNumber is stored in localStorage
      const userDataForRegistrationNumber = userData.find(user => user.registrationNumber === registrationNumber);
      if (userDataForRegistrationNumber) {
        setUserName(userDataForRegistrationNumber.name);
      }
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome, {userName}!</p>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
};

export default CheckLogin;
