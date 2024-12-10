import ButtonBlue from "../../../../../components/button-blue/ButtonBlue";
import { NAVBAR_LINKS } from "./linksNavbar";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-links">
        <ul>
          {NAVBAR_LINKS.map((item, index) => (
            <li key={index}>
              <a href={item.path}>
                <img
                  src={item.icon}
                  alt={`${item.label} icon`}
                  className="icon"
                />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-actions">
        <a href="/login" className="login-link">
          Inicia sesión
        </a>
        <ButtonBlue children="Registrarse"></ButtonBlue>
      </div>
    </nav>
  );
};

export default Navbar;
