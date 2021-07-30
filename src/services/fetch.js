export default async function fetchData(path) {
  const r = await fetch(path);
  const recurso = await r.json();
  let ciudad;
  if (recurso.main !== undefined) {
    ciudad = {
      min: Math.round(recurso.main.temp_min),
      max: Math.round(recurso.main.temp_max),
      img: recurso.weather[0].icon,
      id: recurso.id,
      wind: recurso.wind.speed,
      temp: recurso.main.temp,
      name: recurso.name,
      weather: recurso.weather[0].main,
      clouds: recurso.clouds.all,
      latitud: recurso.coord.lat,
      longitud: recurso.coord.lon,
    };
  }
  return ciudad;
}
