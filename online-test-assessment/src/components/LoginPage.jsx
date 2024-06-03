import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';
import '../styles/custom.scss';
import '../styles/bootstrap.scss';
import usersData from '../data/users.json'; // Assuming you have imported the users.json file

const LoginPage = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [dob, setDOB] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
  
    // Check if user credentials match any in the users.json file
    const user = usersData.find((user) => user.registrationNumber === registrationNumber && user.dob === dob);
  
    if (user) {
      // Set user data in local storage upon successful login
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      // Redirect to the home page or dashboard
      history.push('/OnlineTestAssessment');
    } else {
      setError('Invalid registration number or date of birth');
    }
  };
  

  return (
    <>
      <NavigationMenu />
      <div className="container mt-5">
        <h2>Login</h2>
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="registrationNumber" className="form-label">Registration Number</label>
            <input
              type="text"
              className="form-control"
              id="registrationNumber"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label">Date of Birth (DDMMYYYY)</label>
            <input
              type="text"
              className="form-control"
              id="dob"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
