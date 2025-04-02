import { Component } from "solid-js";
import {
  TAS,
  SolarFoundation,
  SwitchElectric,
  Arkreen,
} from "~/assets/companies";

const Carousel: Component = () => {
  return (
    <div class="slider">
      <ul>
        <li>
          <img class="item small1" style="order: 1;" src={Arkreen} />
        </li>
        <li>
          <img class="item big1" style="order: 2;" src={SolarFoundation} />
        </li>

        <li>
          <img class="item focus" style="order: 3;" src={SwitchElectric} />
        </li>

        <li>
          <img class="item big2" style="order: 4;" src={Arkreen} />
        </li>
        <li>
          <img class="item small2" style="order: 5;" src={TAS} />
        </li>
      </ul>
    </div>
  );
};
export default Carousel;
