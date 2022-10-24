import React, { Component } from "react";
import { useLocation, Route, Routes } from "react-router-dom";

import AdminNavbar from "../componentss/Navbars/AdminNavbar"
import Footer from "../componentss/Footer/Footer.js"
import Sidebar from "../componentss/Sidebar/Sidebar";
import FixedPlugin from "../componentss/FixedPlugin/FixedPlugin.js";
import Dashboard from "../views/Dashboard";
import Icons from "../views/Icons"; 
import Maps from "../views/Maps";
import Typography from "../views/Typography";
import UserProfile from "../views/UserProfile"
import TableList from "../views/TableList";
import routes from "../routes";
import Notifications from "../views/Notifications";
import sidebarImage from "../assets/img/sidebar-3.jpg";

function Admin() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);
  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className="content">
            <Routes>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/userprofile" element={<UserProfile />} />
            <Route exact path="/table" element={<TableList />} />
            <Route exact path="/typography" element={<Typography />} />
            <Route exact path="/icons" element={<Icons />} />
            <Route exact path="/maps" element={<Maps />} />
            <Route exact path="/notification" element={Notification} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
      <FixedPlugin
        hasImage={hasImage}
        setHasImage={() => setHasImage(!hasImage)}
        color={color}
        setColor={(color) => setColor(color)}
        image={image}
        setImage={(image) => setImage(image)}
      />
    </>
  );
}

export default Admin;
