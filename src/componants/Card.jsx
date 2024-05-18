import { Link } from "react-router-dom";
const Card = ({ info }) => {
  return (
    <Link to={`country/${info.name.common}`} className="rounded-md shadow-md">
      <div className="border-darkbg ">
        <img
          src={info.flags.png}
          alt={info.name.common}
          className="object-cover h-[200px]"
        />
      </div>
      <div className="px-4">
        <h1> {info.name.common} </h1>
        <h3> population: {info.population} </h3>
        <h3> region: {info.region} </h3>
        <h3>capital : {info.capital} </h3>
      </div>
    </Link>
  );
};

export default Card;
