import "./PageNotFound.css";
function PageNotFound() {
  return (
    <section className="error">
      <div className="container not-found">
        <h1 className="error-text">Error 404</h1>
        <h4 className="error-content">
          Woops.Looks like this page doesn't exist
        </h4>
        <a className="link" href="/">
          Go to Home
        </a>
      </div>
    </section>
  );
}

export default PageNotFound;
