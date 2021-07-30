import React from "react";
import Card from "../components/Card.jsx";
import Cards from "../components/Cards.jsx";
import SearchBar from "../components/SearchBar.jsx";

import styles from "./CitiesPage.module.css";

function CitiesPage({ data, handleOnClose, onSearch }) {
  return (
    <>
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className={styles.citiesContainer}>
        {data.length > 0 ? (
          <>
            <Card
              primary
              max={data[data.length - 1].max}
              min={data[data.length - 1].min}
              name={data[data.length - 1].name}
              img={data[data.length - 1].img}
            />
            <Cards cities={data} onClose={handleOnClose} />
          </>
        ) : (
          <span
            style={{
              textAlign: "center",
              width: "70vw",
              marginTop: "1rem",
              fontSize: "2rem",
            }}
          >
            Agrega una nueva ciudad
          </span>
        )}
      </div>
    </>
  );
}

export default CitiesPage;
