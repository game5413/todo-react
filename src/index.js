import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { JssProvider, ThemeProvider } from "react-jss"
import JssPreset from "./jss"

function PxToRem(pixel) {
    return `${(pixel / 16)}rem`
}

function RandString() {
    return Math.random().toString(36).replace('0.', '')
}

const theme = {
    background: "#00000",
    PxToRem: PxToRem,
    randomString: RandString
}

ReactDOM.render(
    <JssProvider jss={JssPreset}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </JssProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
