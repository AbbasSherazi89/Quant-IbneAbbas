import React from "react";
import BgVideo from "../Components/Elements/BgVideo";
import BuiltFor from "../Components/Elements/BuiltFor";
import DesignedFor from "../Components/Elements/DesignedFor";
import Developers from "../Components/Elements/Developers";
import Empowered from "../Components/Elements/Empowered";
import Explore from "../Components/Elements/Explore";
import FEPD from "../Components/Elements/FEPD";
import FutureOfFinance from "../Components/Elements/FutureOfFinance";
import Interoperability from "../Components/Elements/Interoperability";
import StarImage from "../Components/Elements/StarImage";
import UnlockingPower from "../Components/Elements/UnlockingPower";

const Hero = () => {
  return (
    <div>
      <BgVideo />
      <UnlockingPower />
      <Empowered />
      <FEPD />
      <StarImage />
      <Explore/>
      <Interoperability/>
      <Developers/>
      <BuiltFor/>
      <DesignedFor/>
      <FutureOfFinance/>
    </div>
  );
};

export default Hero;
