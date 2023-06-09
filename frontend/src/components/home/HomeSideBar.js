import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import SideBarItem from "./SideBarItem";

const HomeSideBar = () => {

    const [open, setOpen] = useState(true);

    const handleToggle = () => {
        setOpen(!open);
    };

    const sidebarShift = {
        true: {},
        false: {
            width: "3rem",
            transition: {
                delay: 0.4,
            },
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
                    transition={{ duration: 0.4 }}
                    whileHover={{
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                        backdropFilter: "blur(5.5px)",
                        WebkitBackdropFilter: "blur(5.5px)",
                        border: "1px solid rgba( 255, 255, 255, 0.18 )",
                        cursor: "pointer",
                    }}
                >
                    <img
                        src="https://ca.slack-edge.com/T055P35BQH1-U057LMAV8G3-ea64a0b72eb0-512"
                        alt="profile_img"
                    />
                </motion.div>
                <div className="groups">
                    <div className="group">
                        <motion.h3 animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}>
                            Welcome!
                        </motion.h3>
                        <SideBarItem icon={"bi bi-person-bounding-box"} name="My Account" />
                    </div>
                </div>
                <div className="group">
                    <motion.h3 animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}>
                        MANAGEMENT
                    </motion.h3>
                    <SideBarItem icon={"bi bi-calendar2-heart"} name="Dashboard" />
                    <SideBarItem icon={"bi bi-house-heart-fill"} name="Property" />{" "}
                    <SideBarItem icon={"bi bi-people"} name="Tenant" />
                </div>
                <div className="group">
                    <motion.h3 animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}>
                        ESTATE-FLOW
                    </motion.h3>
                    <SideBarItem icon={"bi bi-cup-hot-fill"} name="About" />
                    <SideBarItem icon={"bi bi-microsoft-teams"} name="Team" />
                    <SideBarItem icon={"bi bi-box-arrow-left"} name="Log out" />
                </div>
            </motion.div>
        </>
    );
};

export default HomeSideBar;
