import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {workerStore} from "./components/WorkerComponent/app/workerStore";

/*


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

*/


/*  for worker component test
    *
    * */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={workerStore}>
            <Router>
                <Routes>
                    <Route path = "/*" element={<App />} />
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
