import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import HomeApplications from "./HomeApplications";
import HomeSideBar from "./HomeSideBar";
import "bootstrap-icons/font/bootstrap-icons.css";

function HomeWelcomePage() {
    //partial code were learnd by ZAINKEEPSCODE's tutorial videos: "React js Sidebar | Animated Navigation Menu" from youtube.

    const [open, setOpen] = useState(true);

    const sideContainerShift = {
        true: {
            width: "14rem",
        },
        false: {
            transition: {
                delay: 0.6,
            },
        },
    };

    return (
        <div className="homepage">
            <motion.div
                data-Open={open}
                variants={sideContainerShift}
                initial={`${open}`}
                animate={`${open}`}
                className="sidebar_container"
            >
                <HomeSideBar />
            </motion.div>
            <HomeApplications />
        </div>
    );
}

export default HomeWelcomePage;