import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="titulo" to="/">
        EnfermoWork
      </Link>
    </nav>
  );
};

export default Navbar;
