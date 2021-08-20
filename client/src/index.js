//import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import CSS

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// redux
import { Provider } from 'react-redux'
import store from './redux/index'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));


// Articles
// https://medium.com/@tibotiber/react-d3-js-balancing-performance-developer-experience-4da35f912484

// youtube
// https://www.youtube.com/watch?v=CVpUuw9XSjY&ab_channel=DevEd

// code
// https://codesandbox.io/s/p3zjl1yr0j?file=/src/components/charts/ScatterPlot.js

// potential example
// https://stackoverflow.com/questions/59929396/how-to-save-array-object-data-in-redux-store