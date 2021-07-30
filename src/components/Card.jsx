import React from "react";
import styles from "./Card.module.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { max, min, name, img, onClose, primary, cityId } = props;
  // acá va tu código
  return (
    <div className={`${styles.card} ${primary ? styles.primary : ""}`}>
      <Link to={`/city/${cityId}`} className={styles.name}>
        {name}
        {!primary && (
          <button className={styles.button} onClick={onClose}>
            <IoCloseCircleOutline />
          </button>
        )}
      </Link>
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="Icono del clima"
      />
      <div className={styles.temps}>
        <Temp label="Min" temp={min} />
        <Temp label="Max" temp={max} />
      </div>
    </div>
  );
}

// Mala practica ALERT
// Esto debería estar en un archivo aparte
function Temp({ label, temp }) {
  return (
    <div className={styles.temp}>
      <span>{label}</span>
      <span>{temp}º</span>
    </div>
  );
}
