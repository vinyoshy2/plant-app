import React, { useState } from 'react'
import HeroSection from '../plant_of_the_day/HeroElementsIndex';
import PanelSection from '../plant_of_the_day/PanelElementsIndex';
import InfoSection from '../plant_of_the_day/InfoElementsIndex';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive
} from '../plant_of_the_day/Data';

function PlantOfTheDay() {
  return (
    <>
      <HeroSection/>
      <PanelSection/>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} />
    </>
  );
}

export default PlantOfTheDay;