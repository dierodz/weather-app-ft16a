import fetchData from "./fetch";

const apiKey = process.env.REACT_APP_APIKEY;

export default function fetchCity(ciudad, setData) {
  fetchData(
    `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
  ).then((city) => {
    if (city) {
      setData((oldCities) => [...oldCities, city]);
    } else {
      alert("Ciudad no encontrada");
    }
  });
}
