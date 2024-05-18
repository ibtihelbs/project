import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Border from "../componants/Border";
const SingleCountry = () => {
  const name = useParams().name;
  const [country, setCountry] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await res.json();
      setCountry(data[0]);
    };
    getData();
  }, [name]);
  console.log(country);
  return (
    <div>
      <Link to={"/"}>go back</Link>
      {country ? (
        <div className="grid grid-cols-2 items-center p-8 gap-8">
          <div className="w-full">
            {" "}
            <img src={country.flags.svg} alt={country.name.common} />{" "}
          </div>
          <div className="description grid grid-cols-2">
            <h1 className="col-span-2 text-2xl"> {country.name.common} </h1>
            <div id="first-col">
              <h2 className="text-lg">
                Native Name :{" "}
                <span className="text-lg font-light ">
                  {" "}
                  {country.name.official}
                </span>{" "}
              </h2>{" "}
              <h2 className="text-lg">
                Population :{" "}
                <span className="text-lg font-light ">
                  {" "}
                  {country.population}
                </span>{" "}
              </h2>{" "}
              <h2 className="text-lg">
                Region :{" "}
                <span className="text-lg font-light "> {country.region}</span>{" "}
              </h2>{" "}
              <h2 className="text-lg">
                sub Region :{" "}
                <span className="text-lg font-light ">
                  {" "}
                  {country.subregion}
                </span>{" "}
              </h2>{" "}
              <h2 className="text-sm">
                capital :{" "}
                <span className="text-lg font-light "> {country.capital}</span>{" "}
              </h2>{" "}
            </div>
            <div id="second-col">
              <h2 className="text-sm">
                Top level domain :{" "}
                <span className="text-lg font-light "> {country.idd[0]}</span>{" "}
              </h2>{" "}
              <h2 className="text-lg">
                Currencies:{" "}
                <span className="text-lg font-light ">
                  {" "}
                  {Object.keys(country.currencies)[0]}
                </span>{" "}
              </h2>{" "}
              <h2 className="text-lg">
                Languages :{" "}
                <span className="text-lg font-light ">
                  {" "}
                  {Object.values(country.languages)}
                </span>{" "}
              </h2>{" "}
            </div>
            <div className="col-span-2 ">
              <h2 className="text-lg flex ">
                Border :{" "}
                <span className=" flex gap-1">
                  {" "}
                  {country.borders?.map((v, i) => (
                    <Border v={v} key={i} />
                  ))}
                </span>{" "}
              </h2>{" "}
            </div>
          </div>
        </div>
      ) : (
        <h1>loadiing.............</h1>
      )}
    </div>
  );
};

export default SingleCountry;
