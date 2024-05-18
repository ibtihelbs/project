import { useState } from "react";

const Filters = ({ setFilters }) => {
  const regions = ["Asia", "Africa", "Europe", "America", "Oceania"];
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center py-8">
      <form
        className="flex items-center gap-2 max-w-xs focus:border-lightinput shadow-md px-4 py-2"
        onSubmit={(e) => {
          e.preventDefault();

          setFilters(input);
          setInput("");
        }}
      >
        <img
          className="h-4"
          src="assets/images/search-outline.svg"
          alt="search-img"
        />
        <input
          className="outline-none border-none  rounded-sm"
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="search for country"
        />
      </form>
      <div className="">
        <div
          className="flex items-center justify-between cursor-pointer rounded-sm shadow-md p-2 w-44"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <h3>Filter By Region</h3>
          <img
            className="h-4"
            src="assets/images/chevron-down-outline.svg"
            alt="chevronDown-img"
          />
        </div>
        <ul
          className={`absolute z-10 shadow-lg rounded-md w-44 mt-1 ${
            open ? "block" : "hidden"
          }`}
        >
          {regions.map((v, i) => (
            <li
              className=" cursor-pointer bg-lightbg px-4"
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
