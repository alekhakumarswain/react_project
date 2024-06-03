// FullScreenPopup.jsx

import React, { useEffect } from 'react';

const FullScreenPopup = ({ onClose }) => {
  useEffect(() => {
    // Disable keyboard shortcuts like alt+tab
    const disableKeyboardShortcuts = (e) => {
      if (e.altKey && e.key === 'Tab') {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', disableKeyboardShortcuts);

    // Auto-submit exam after 30 minutes
    const thirtyMinutes = 30 * 60 * 1000; // 30 minutes in milliseconds
    const timer = setTimeout(() => {
      onClose();
      console.log('Exam auto-submitted due to time limit.');
    }, thirtyMinutes);

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', disableKeyboardShortcuts);
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="full-screen-popup">
      <div className="navbar navbar-light bg-light">
        <span className="navbar-brand">Exam</span>
        <button className="btn btn-danger" onClick={onClose}>Submit Exam</button>
      </div>
      {/* Add exam questions and options here */}
    </div>
  );
}

export default FullScreenPopup;
