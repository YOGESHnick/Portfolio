import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    scale:0.8,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    scale:1.0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export default function Services() {
    
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants} >
        <p>
          I focus on helping your brand <b>grow</b>
          <br /> and <b>move forward</b>
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants} >
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For your</motion.b> Business
          </h1>
          <a href="#Contact" ><button>Go</button></a>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants} >
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black", scale: 1.01 }}
        >
          <h2>Website Develepment </h2>
          <p>
          Create a compelling online presence with bespoke websites that seamlessly blend cutting-edge technology and user-centric design.
          </p>
          <a href="#Contact" ><button>Go</button></a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black", scale: 1.01 }}
        >
          <h2>App development</h2>
          <p>
          Elevate your business with versatile mobile applications, designed to run seamlessly on both iOS and Android platforms for a unified user experience.
          </p>
          <a href="#Contact" ><button>Go</button></a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black", scale: 1.01 }}
        >
          <h2>Web Desgin</h2>
          <p>
          Transform your vision into a visually stunning reality. I craft modern and captivating website designs that reflect your brand identity and ensure a seamless user experience.
          </p>
          <a href="#Contact" ><button>Go</button></a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black", scale: 1.01 }}
        >
          <h2>AI/ML solutions</h2>
          <p>
          Drive innovation with tailored AI/ML solutions that analyze data, automate processes, and provide intelligent insights, unlocking new possibilities for your organization.
          </p>
          <a href="#Contact" ><button>Go</button></a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}