import React from "react";
import myhowManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import { trees, wildlife } from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain"

export default function ColoradoStateParks() {
  myhowManyParks(); // => "42 parks!"
  console.log(trees)
  console.log(RMFunctions.trees)
  RMFunctions.wildlife()
  RMFunctions.elevation()
  wildlife()

  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <MesaVerde />
    </div>
  ) 
}
