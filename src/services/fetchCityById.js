import fetchData from "./fetch";

const apiKey = process.env.REACT_APP_APIKEY;

export default function fetchCityById(id, setData) {
  fetchData(
    `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`
  ).then((city) => {
    if (city) {
      setData(city);
    } else {
      setData(null);
    }
  });
}
