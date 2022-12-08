import { Link } from "react-router-dom";
import { projectName } from "../config";

export default function Header() {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <Link to={projectName + "/"} className="brand-logo">
          Goods
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/The-barer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
          </li>
          <li>
            <Link to={projectName + "/"}>Home</Link>
          </li>
          <li>
            <Link to={projectName + "/About"}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
