// src/components/Alert.js
import React from 'react';

export default function Alert(props) {
  const capitalize = (word) => {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    props.alert && (
      <div className='container my-3'>
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
        style={{ backgroundColor: '#d4edda', borderColor: '#c3e6cb', color: '#155724' }} // light green success background
      >
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
        {/* Close button for the alert */}
            
    
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      </div>
    )
  );
}
