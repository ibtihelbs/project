const Card = ({ info }) => {
  return (
    <div>
      <div className="border-darkbg ">
        <img
          src={info.flags.png}
          alt={info.name.common}
          className="object-cover w-full h-[200px]"
        />
      </div>

      <h1> {info.name.common} </h1>
      <h3> population: {info.population} </h3>
      <h3> region: {info.region} </h3>
      <h3>capital : {info.capital} </h3>
    </div>
  );
};

export default Card;
