import React from "react";
import { motion } from "framer-motion";
import "./SideBarItem.css";
function SideBarItem({ icon, name }) {
  const subheading = {
    true: {
      opacity: 1,
    },
    false: {
      opacity: 0,
      display: "none",
    },
  };
  return (
    <motion.div
      className="SideBarItem"
      whileHover={{
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(5.5px)",
        cursor: "pointer",
      }}
      transition={{
        type: "none",
        duration: 0.1,
      }}
    >
      <motion.div className="icon">
        <i className={icon}></i>
      </motion.div>
      <motion.span variants={subheading}>{name}</motion.span>
    </motion.div>
  );
}

export default SideBarItem;
