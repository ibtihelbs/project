import { Outlet } from "react-router-dom";
import ThemeSwitcher from "../componants/ThemeSwitcher";

const Index = () => {
  return (
    <div>
      <ThemeSwitcher />
      <Outlet />
    </div>
  );
};

export default Index;
