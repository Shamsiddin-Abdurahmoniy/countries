// style
import "./Footer.css";
function Footer({ mode }) {
  return (
    // <footer className={`footer ${mode ? "dark-mode" : "light-mode"}`}>
    <footer className="footer">
      <div className="container footer__container">
        <a className="footer__link" href="https://t.me/shamsik_a">
          Shamsiddin Abdurahmonov
        </a>
      </div>
    </footer>
  );
}

export default Footer;
