// style
import "./Home.css";
// react
import { Link } from "react-router-dom";
// hooks
import useFetch from "../../hooks/useFetch";
// components
import Filter from "../../components/filter/Filter";
import { useState } from "react";
function Home({ mode }) {
  const [search, setSearch] = useState("");
  const url = "https://countries-api-v7sn.onrender.com/countries?limit=250";
  const { mainData, isPending, error } = useFetch(search ? search : url);
  return (
    <>
      <Filter setSearch={setSearch} mode={mode} />
      <section className="home">
        <div className="container home__container">
          {mainData &&
            mainData.map((country, i) => {
              const { name, region, flags, capital, population } = country;
              return (
                <Link to={`/about/${name.slug}`} className="card" key={i}>
                  <img
                    src={flags.png}
                    alt={name.common}
                    className="card__img"
                  />
                  <div className="card-content">
                    <h3 className="card-content__title">{name.common}</h3>
                    <p className="card-content__population">
                      <b>Population: </b>
                      {population}
                    </p>
                    <p className="card-content__region">
                      <b>Region: </b>
                      {region}
                    </p>
                    <p className="card-content__capital">
                      <b>Capital: </b>
                      {capital}
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>
      </section>
    </>
  );
}

export default Home;
