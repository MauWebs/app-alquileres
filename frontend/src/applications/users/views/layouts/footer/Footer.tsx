import { SOCIAL_MEDIA_LINKS } from "./linksSocialMedia.ts";
import "./footer.scss";

function Footer() {
  return (
    <footer>
      <a href="#">
        <h1>STAY</h1>
      </a>
      <p>
        © 2024 Todos los derechos reservados.
        <br />
        No olvides visitar mis redes sociales.
      </p>
      <ul>
        {SOCIAL_MEDIA_LINKS.map((item, index) => (
          <li key={index}>
            <a target="_blank" href={item.url}>
              <img src={item.img} alt={item.label} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
