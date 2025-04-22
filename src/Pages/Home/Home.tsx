import BoxLeft from "../../Components/BoxLeft/BoxLeft";
import BoxRight from "../../Components/BoxRight/BoxRight";


import { FC } from "react";
const Home : FC = () => {
  return (
    <div className="wrapper">
      <BoxLeft/>
      <BoxRight/>
    </div>
  );
};

export default Home;
