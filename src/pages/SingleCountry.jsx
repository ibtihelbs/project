import { useState, useEffect } from "react";
import ThemeSwitcher from "../componants/ThemeSwitcher";

const SingleCountry = () => {
  const name = "italy";
  const [country, setCountry] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await res.json();
      setCountry(data[0]);
    };
    getData();
  }, []);
  console.log(country);
  return (
    <div>
      <ThemeSwitcher />
      {country ? (
        <div className="grid grid-cols-2 items-center">
          <div className="w-full">
            {" "}
            <img src={country.flags.svg} alt={country.name.common} />{" "}
          </div>
          <div className="description">
            <h1> {country.name.common} </h1>
          </div>
        </div>
      ) : (
        <h1>loadiing.............</h1>
      )}
    </div>
  );
};

export default SingleCountry;
