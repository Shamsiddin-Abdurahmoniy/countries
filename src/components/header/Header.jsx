// ctyle
import "./Header.css";
// icons
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
// images
import MoonIcon from "../../assets/moon-icon.svg";
function Header({ mode, setMode }) {
  return (
    // <header className={`header ${mode ? "dark-mode" : "light-mode"}`}>
    <header className="header">
      <div className="container header__container">
        <a href="/" className="site-logo">
          Where in the world?
        </a>
        <button
          onClick={() => {
            setMode((prev) => !prev);
          }}
          className="mode-toggle"
        >
          {mode ? (
            <MdDarkMode className="mode-toggle__dark-icon" />
          ) : (
            <MdOutlineDarkMode className="mode-toggle__icon" />
          )}
          <span className="mode-toggle__text">Dark Mode</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
