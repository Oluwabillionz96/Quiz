import "./navbar.css";
import settings from "../../assets/settings.png";
import highScore from "../../assets/high-score.png";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex">
        <Link to="/">
          <h1 className="logo">Logo</h1>
        </Link>
        <div className="navigations flex">
          <Link to="/settings">
            <div className="flex">
              <img src={settings} alt="settings icon" />
              <p>Settings</p>
            </div>
          </Link>
          <div className="flex">
            <img src={highScore} alt="high score icon" />
            <p>High Score</p>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
