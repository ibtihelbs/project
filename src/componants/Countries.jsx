import { useEffect, useState } from "react";
import Card from "./Card";
const Countries = ({ filters }) => {
  const [displayData, setDisplayData] = useState(null);
  console.log(filters);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/${filters ? filters : "all"}`
      );
      const data = await res.json();

      setDisplayData(data);
    };
    getData();
  }, [filters]);
  return (
    <div className="grid grid-cols-4 gap-8 p-8">
      {displayData ? (
        displayData.slice(0, 9).map((v, i) => <Card key={i} info={v} />)
      ) : (
        <h1>loading....</h1>
      )}
    </div>
  );
};

export default Countries;
