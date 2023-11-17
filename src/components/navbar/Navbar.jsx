import './navbar.scss';

export default function Navbar() {
  return (
    <div className="navbar">
      {/* Navbar */}
      <div className="wrapper">
        <span>S H A M L I N</span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}