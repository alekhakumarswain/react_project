import React, { useState } from 'react';
import FullScreenPopup from './FullScreenPopup';
import questionsData from '../data/qa.json'; // Import sample questions
import CheckLogin from './CheckLogin';
import NavigationMenu from './NavigationMenu';

const OnlineTestAssessment = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [userName, setUserName] = useState('');

  // Assuming you have a function to get user name from CheckLogin component
  const getUserName = (name) => {
    setUserName(name);
  };

  const startExam = () => {
    setShowPopup(true);
    setStartTime(new Date());
  };

  const closeExam = () => {
    // Perform actions to submit exam
    setShowPopup(false);
    setStartTime(null);
  };

  const calculateMarks = () => {
    // Calculate marks based on user's answers
    let marks = 0;
    // Add your logic to calculate marks from answers
    // For demonstration purposes, let's assume all answers are correct
    marks = questionsData.questions.length * 2;
    return marks;
  };

  const handlePopupClose = () => {
    // Handle auto submission on irregular activities
    closeExam();
    // You can also add logic to submit exam when user tries to close tab or switch tab
    // For demonstration purposes, we'll console log it
    console.log('Exam auto-submitted due to irregular activity.');
  };

  return (
    <>
                <NavigationMenu/>
    <div className='OnlineTestAssessment'>
      <h2>Online Test Assessment</h2>
      <CheckLogin onLogin={getUserName} />
      <button className="btn btn-primary" onClick={startExam}>Start Assessment</button>
      <div className='exam-container'>
        {/* Show popup only if the assessment has started */}
        {showPopup && <FullScreenPopup onClose={handlePopupClose} />}
      </div>
      {userName && <p>Welcome, {userName}!</p>}
    </div>
    </>
  );
}

export default OnlineTestAssessment;
