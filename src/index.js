import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// import "./assets/css/animate.min.css";
// import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
// import "./assets/css/demo.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";

// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/css/animate.min.css";
// import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
// import "./assets/css/demo.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// import Admin from "./layouts/Admin.js";
// import Dashboard from "./views/Dashboard";
// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//       <Route exact path="/" element={<Admin />} />
      
//       {/* <Navigate from="/" to="/admin/dashboard" /> */}
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
