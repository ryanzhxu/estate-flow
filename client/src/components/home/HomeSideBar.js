import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import SideBarItem from "./SideBarItem";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const HomeSideBar = () => {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  const sidebarShift = {
    true: {},
    false: {
      width: "5rem",
    },
  };

  const profileShift = {
    true: {
      alignSelf: "center",
      width: "4rem",
    },
    false: {
      alignSelf: "flex-start",
      marginTop: "2rem",
      width: "3rem",
    },
  };

  const whiteHoverStyles = {
    scale: 1.2,
    rotate: 180,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(3.5px)",
    WebkitBackdropFilter: "blur(3.5px)",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    transition: {
      delay: 0.2,
      duration: 0.4,
    },
  };

  return (
    <>
      <motion.div
        className="sidebar"
        initial={`${open}`}
        animate={`${open}`}
        variants={sidebarShift}
      >
        <motion.div
          whileHover={whiteHoverStyles}
          onClick={handleToggle}
          className="lines_icon"
        >
          <i className={"bi bi-card-list"}></i>
        </motion.div>
        <motion.div
          layout
          initial={`${open}`}
          animate={`${open}`}
          variants={profileShift}
          className="profile"
          whileHover={whiteHoverStyles}
        >
          <img
            src= "https://hips.hearstapps.com/hmg-prod/images/russian-blue-royalty-free-image-1658451809.jpg?crop=0.667xw:1.00xh;0.120xw,0&resize=1200:*"
            alt="profile_img"
          />
        </motion.div>
        <br></br>
        <div className="groups">
          <div className="group">
            <SideBarItem icon={"bi bi-person-bounding-box"} name="My Account" />
          </div>
        </div>
        <div className="group">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <SideBarItem icon={"bi bi-calendar2-heart"} name="Dashboard" />
          </Link>{" "}
          <Link
            to="/properties"
            style={{ textDecoration: "none", color: "white" }}
          >
            <SideBarItem icon={"bi bi-house-heart-fill"} name="Properties" />
          </Link>{" "}

          <Link to="/tenants" style={{ textDecoration: "none", color: "white" }}>
            <SideBarItem icon={"bi bi-people"} name="Tenants" />
          </Link>


          <Link to="/workers" style={{ textDecoration: "none", color: "white" }}>
            <SideBarItem icon={"bi bi-person-circle"} name="Workers" />
          </Link>


        </div>
        <div className="group">
          <SideBarItem icon={"bi bi-cup-hot-fill"} name="About" />
          <SideBarItem icon={"bi bi-microsoft-teams"} name="Team" />
          <SideBarItem icon={"bi bi-box-arrow-left"} name="Log out" />
        </div>
        <br></br>
        <br></br>

        {open && <div className="sideLogo">
          <img src={logo} alt="logo" width="200" height="40" />
        </div>}
      </motion.div>
    </>
  );
};

export default HomeSideBar;
