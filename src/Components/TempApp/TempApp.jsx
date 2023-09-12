import React, { useEffect, useState } from "react";
import "./TempApp.scss";
import { FaStreetView } from "react-icons/fa";

function TempApp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a9c16fefab33699d0627a27d953597a1`;

      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputField"
            placeholder="type..."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <>
            <div className="info">
              <div className="location">
                <h1>
                  <FaStreetView size="1.3em" />
                  {search}
                </h1>
              </div>
              <div className="temp">
                <h2>{city.temp}°Cel</h2>
                <h3 className="tempmin_max">
                  Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel{" "}
                </h3>
              </div>
            </div>

            <div className="wave one"></div>
            <div className="wave two"></div>
            <div className="wave three"></div>
          </>
        )}
      </div>
    </>
  );
}

export default TempApp;
