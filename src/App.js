import React from 'react';
import { useEffect, useState } from 'react';
import { startInstallProcess } from './install';
import { HashRouter, Route, Link } from "react-router-dom";
// import injectSheet, { jss, ThemeProvider } from "react-jss";

const theme = {
  background: "#f7df1e",
  color: "#24292e"
};

const styles = {
  root: {
    background: '#000'
  }
}

const handleFiles = (e, updateFiles) => {
  const files = e.nativeEvent.target.files;
  updateFiles(`${files.length} Selected`);
};

const App = (props) => {

  useEffect(() => {
    startInstallProcess();
  });

  const [filesSelected, updateFiles] = useState('Upload Files');

  const {
    classes
  } = props;

  return (
    <HashRouter basename="/">


      <div style={{
        // fontFamily: 'Arial, Helvetica, sans-serif !important',
        background: '#212121'
      }}>
        <div style={{
          padding: 2,
          background: 'rgba(0, 0, 0, 0.2)',
          boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 9px 1px rgba(0, 0, 0, 0.12), 0 4px 2px -2px rgba(0, 0, 0, 0.2)'
        }}>
          <header>
            <h1 style={{
              textAlign: 'center'
            }}>
              <a href="/" style={{
                textDecoration: 'none',
                color: 'white'
              }}>
                Mpowered
          </a>
            </h1>
            <button id="butInstall" aria-label="Install MPowered" hidden>Install MPowered</button>
          </header>
        </div>
        <div style={{
          position: 'fixed',
          top: '50%',
          margin: 8
        }}
        >
          <div class="input-container">
            <input type="file" id="real-input" onChange={(e) => handleFiles(e, updateFiles)} />
            <button
              class="browse-btn"
              onClick={(e) => document.getElementById('real-input').click()}
            >
              Browse Files
            </button>
            <span
              class="file-info"
              style={{
                padding: 4,
                color: '#000'
              }}
            >
              {filesSelected}
            </span>
          </div>
        </div>
      </div>

    </HashRouter >
  );
}

export default (App);
