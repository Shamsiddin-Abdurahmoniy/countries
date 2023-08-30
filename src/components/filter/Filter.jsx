// style
import "./Filter.css";
// icon
import { MdSearch, MdKeyboardArrowDown } from "react-icons/md";
function Filter({ setSearch, mode }) {
  const url = "https://countries-api-v7sn.onrender.com/countries";
  const search_region = "?region=";
  const search_country = "?search=";
  function searchingByRegion(region) {
    setSearch(url + region);
  }
  function searchingByCountry(country) {
    setSearch(url + country);
  }
  return (
    <section className="filter">
      <div className="container filter__container">
        <form className="filter__form">
          <MdSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for a country"
            autoComplete="off"
            onChange={(e) => {
              searchingByCountry(search_country + e.target.value);
            }}
          />
        </form>
        <div className="filter-select">
          <div>
            <span className="filter-select__title">Filter by Region</span>
            <MdKeyboardArrowDown color={`${mode ? "white" : "black"}`} />
          </div>
          <ul
            className="filter-select__list"
            onClick={(e) =>
              searchingByRegion(search_region + e.target.innerHTML)
            }
          >
            <li className="filter-select__item">Africa</li>
            <li className="filter-select__item">Americas</li>
            <li className="filter-select__item">Asia</li>
            <li className="filter-select__item">Europe</li>
            <li className="filter-select__item">Oceania</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Filter;
