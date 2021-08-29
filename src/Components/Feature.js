import React from "react";
import FeatureBox from "./FeatureBox";
import fimage1 from '../images/1.svg'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import fimage4 from '../images/4.svg'

function Feature() {
  return (
    <div id="features">
      <h1>FEATURES</h1>
      <div className="a-container">
      <FeatureBox image={fimage1} title={"weight Lifiting"} pragraph={"Weightlifting is a sport in which the competitor who can lift the heaviest weight wins."}/>
      <FeatureBox image={fimage2} title={"Specific Muscle"} pragraph={"Masseter. The masseter runs from the temporal bone (that forms part of the sides and base of the skull"}/>
      <FeatureBox image={fimage3} title={"Flex Your Muscle"} pragraph={"Flexing your muscles is more than just a way to show off the results of your strength training workouts."}/>
      <FeatureBox image={fimage4} title={"Cardio Exercise"} pragraph={"Elliptical. The elliptical machine can provide the cardio benefits of walking or running, with reduced impact on a person's joints"}/>

      </div>
    </div>
  );
}

export default Feature;
