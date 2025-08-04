import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#03193d';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <h1 className="text-center mb-3">TextUtils Application</h1>
        <p className="text-center mb-1">
          This is a simple text utility application that allows you to manipulate text in various ways.
        </p>

         {/* <Routes> */}
          {/* <Route
            exact
            path="/"
            element={ */}
              <TextForm
                showAlert={showAlert}
                mode={mode}
                heading="Enter your text below"
              />
            {/* }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>  */}
      </div>
    </>
  );
}

export default App;
