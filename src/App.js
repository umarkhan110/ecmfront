import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
//import Admin from './component/Admin';
//import Menu from './component/Menu';
import Home from './components/Home';
import Shop from './component/Shop';
import AddProduct from './component/Addproduct';
import ProductFull from './component/ProductFull';
import Login from './component/Login';
import Signup from './component/Signup';
import Dashboard from './component/Dashboard';
import Edititm from './component/Edititm';
import MultiStepForm from './components/MultiStepForm';
import Navb from './components/Navb'
import Signin from './components/Signin'
import Hostels from './components/Hostels';
import About from './fbcomponent/About'
import Menu from './fbcomponent/Menu'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/css/animate.min.css";
// import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
// import "./assets/css/demo.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import Ner from "./component/Ner"
import AdminLayout from "./layouts/Admin.js";
import Admin from './layouts/Admin.js';
import Detail from './components/Detail.js';
import Searh from './components/Searh';
import Useplace from './components/Useplace';
import Fb from './component/Fb'
// import Home from './fbcomponent/Home'
import Term from './fbcomponent/Term'
import Howtouse from './fbcomponent/Howtouse';
import Privacy from './fbcomponent/Privacy';
import Faq from './fbcomponent/Faq'
function App() {
  return (
    <div>
      {/* <Fb /> */}
      {/* <Home /> */}
      {/* <Ner /> */}
    <Navb />
    {/* <Admin /> */}
    {/* <Menu /> */}
        <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/aboutus"  element={<About />}/>
        <Route path="/term"  element={<Term />}/>
        <Route path="/privacy"  element={<Privacy />}/>
        <Route path="/howtouse"  element={<Howtouse />}/>
       <Route path="/faq"  element={<Faq />}/>  */}
        <Route exact path="/dash" element={<Dashboard />} />
        <Route exact path="/shop" element={<AddProduct />} />
        <Route exact path="/edititm/:id" element={<Edititm />} />
        <Route exact path="/details/:id" element={<Detail />} />
       
        <Route exact path="/hostels" element={<Hostels />} />
        <Route exact path="/addhostel" element={<MultiStepForm />} />
        <Route exact path="/sign" element={<Signin />} />
        <Route exact path="/searh/:lat/:lng" element={<Searh />} />
        <Route exact path="/autop" element={<Useplace />} />
      {/* {  <Navigate from="/" to="/admin/dashboard" /> } */}
      {/* <Route path="/" element={<Navigate replace to="/admin/dashboard"/> }/> */}
      </Routes>
    </div>
  );
}

export default App;
