import './navbar.scss';
import Test from '../../Test';
import Sidebar from "../sidebar/Sidebar";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* Navbar */}
      <Sidebar />
      <div className="wrapper">
        <span>S H A M L I N</span>
        <div className="social">
          <a target="_blank" href="https://twitter.com/Nicky_zander">
            <img src="/X_logo.jpg" alt="" />
          </a>
          <a target="_blank" href="https://linkedin.com/in/yogesh-shamlin-shinanth-j-s">
            <img src="/linkedin.png" alt="" />
          </a>
          <a target="_blank" href="https://github.com/YOGESHnick">
            <img src="/github.png" alt="" />
          </a>
          {/* <a target="_blank" href="#">
            <img src="/.png" alt="" />
          </a> */}
        </div>
      </div>
      {/* <Test /> */}
    </div>
    
  );
}
