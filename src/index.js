import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'), () => {

});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
window.addEventListener('load', (e) => {
    if (navigator.serviceWorker) {
        navigator.serviceWorker.register('/sw.js').then((registered) => {
            console.log('SW Registered');
            console.log('SW', navigator.serviceWorker);
        })
    }
});


