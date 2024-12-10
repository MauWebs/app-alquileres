import arrow from "../../../../../assets/header/arrow.svg";
import "./header.scss";

function Header() {
  return (
    <header>
      <a href="#" rel="noopener noreferrer">
        <h1>
          ¡Empieza a ganar dinero a partir de tus propiedades y alquileres!
        </h1>
        <img src={arrow} />
      </a>
    </header>
  );
}

export default Header;
