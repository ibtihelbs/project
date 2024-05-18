import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Border = ({ v }) => {
  const [countryName, setCountryName] = useState("");
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${v}`);
      const data = await res.json();
      setCountryName(data[0].name.common);
    };
    getData();
  }, []);
  return (
    <Link
      to={`/country/${countryName}`}
      className="text-lg font-light  capitalize"
    >
      {" "}
      {countryName}{" "}
    </Link>
  );
};

export default Border;
