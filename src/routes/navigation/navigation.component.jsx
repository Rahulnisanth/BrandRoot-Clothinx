import { Outlet, Link } from "react-router-dom";
import CrownLogo from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src={CrownLogo} alt="CrownLogo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
          <Link className="nav-link" to="/signin">
            Sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
