import { useState } from "react";

const Filters = ({ setFilters }) => {
  const regions = ["Asia", "Africa", "Europe", "America", "Oceania"];
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          setFilters(input);
          setInput("");
        }}
      >
        <span>icon holder</span>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="search for country"
        />
      </form>
      <div>
        <h3
          className="cursor-pointer"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          filter by region
        </h3>
        <ul className={`absolute z-10  ${open ? "block" : "hidden"}`}>
          {regions.map((v, i) => (
            <li
              className=" cursor-pointer bg-lightbg "
              key={i}
              onClick={() => {
                setFilters(`region/${v}`);
              }}
            >
              {" "}
              {v}{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filters;
