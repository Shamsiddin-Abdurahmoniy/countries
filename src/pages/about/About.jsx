// style
import "./About.css";
// react
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// icons
import { BsArrowLeft, BsLayoutTextWindow } from "react-icons/bs";
// hooks
import useFetch from "../../hooks/useFetch";
function About() {
  const { slug } = useParams();
  const url = `https://countries-api-v7sn.onrender.com/countries/slug/${slug}`;
  const { data, isPending, error } = useFetch(url);
  return (
    <>
      {data && (
        <section className="about">
          <div className="container about__container">
            <Link to="/" className="about__link">
              <BsArrowLeft />
              Back
            </Link>
            <div className="about__body">
              <img
                className="about__img"
                src={data.flags.svg}
                alt={data.flags.alt}
              />
              <div className="about-content">
                <h1 className="title">{data.name.common}</h1>
                <div className="text-wrapper">
                  <div className="text-wrappper__left">
                    <p className="native-name">
                      <b>Native Name: </b>
                      {data.name.nativeName}
                    </p>
                    <p>
                      <b>Population: </b>
                      {data.population}
                    </p>
                    <p>
                      <b>Region: </b>
                      {data.region}
                    </p>
                    <p>
                      <b>Sub Region: </b>
                      {data.subregion}
                    </p>
                    <p>
                      <b>Capital: </b>
                      {data.capital}
                    </p>
                  </div>
                  <div className="text-wrapper__right">
                    <p>
                      <b>Top Level Domain: </b>
                      .be
                    </p>
                    <p>
                      <b>Currencies: </b>
                      {data.currencies}
                    </p>
                    <p>
                      <b>Languages: </b>
                      {data.languages.join(", ")}
                    </p>
                  </div>
                </div>
                <div className="borders">
                  <b>Border Countries: </b>
                  <div>
                    {data.borders &&
                      data.borders.map((country) => {
                        console.log(country);
                        return (
                          <Link
                            to={`/about/${country.slug}`}
                            className="border-country"
                          >
                            {country.common}
                          </Link>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default About;
