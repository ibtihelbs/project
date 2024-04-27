import { useState } from "react";
import Countries from "../componants/Countries";
import Filters from "../componants/Filters";
import ThemeSwitcher from "../componants/ThemeSwitcher";

const Home = () => {
  const [filters, setFilters] = useState("");
  console.log(filters);
  return (
    <div>
      <div className="py-4 px-8">
        <ThemeSwitcher />
        <Filters setFilters={setFilters} />
      </div>
      <Countries filters={filters} />
    </div>
  );
};

export default Home;
