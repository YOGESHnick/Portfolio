import "./sidebar.scss"
import Links from "./links/Links"
import Togglebutton from "./toggleButton/Togglebutton"
import { motion } from "framer-motion";
import {useState} from "react"

export default function Sidebar() {
    const [open,setOpen]=useState(false);

    const variants = {
        open: {
          clipPath: "circle(1200px at 50px 50px)",
          transition: {
            type: "spring",
            stiffness: 20,
          },
        },
        closed: {
          clipPath: "circle(30px at 50px 50px)",
          transition: {
            delay: 0.0,
            type: "spring",
            stiffness: 400,
            damping: 50,
          },
        },
      };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"} >
      <motion.div className="bg" variants={variants} >
        <Links />
      </motion.div>
      <Togglebutton setOpen={setOpen} />
    </motion.div>
  );
}
