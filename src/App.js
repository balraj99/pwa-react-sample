import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { startInstallProcess } from './install';
import { HashRouter, Route, Link } from "react-router-dom";

const handleFiles = (e) => {
  const files = e.nativeEvent.target.files;
  console.debug('Files ', files, e.nativeEvent);
};

function App() {

  useEffect(() => {
    console.log('Hello')
    startInstallProcess();
  });

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <HashRouter basename="/">
      <div>
        <div>
          <header class="header">
            <h1>
              <a href="https://darksky.net/poweredby/" class="powered-by">
                Mpowered
          </a>
            </h1>
            <button id="butInstall" aria-label="Install MPowered" hidden>Install MPowered</button>
          </header>
        </div>
        <div style={{
          position: 'fixed',
          top: '50%'
        }}
        >
          <input
            type="file"
            onChange={handleFiles}
            multiple

          />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
