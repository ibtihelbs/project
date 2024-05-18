import { useState } from "react";
import Countries from "../componants/Countries";
import Filters from "../componants/Filters";

const Home = () => {
  const [filters, setFilters] = useState("");
  console.log(filters);
  return (
    <div>
      <Filters setFilters={setFilters} />
      <Countries filters={filters} />
    </div>
  );
};

export default Home;
