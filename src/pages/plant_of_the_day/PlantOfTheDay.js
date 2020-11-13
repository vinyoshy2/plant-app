import React, { useState } from 'react'
import HeroSection from '../plant_of_the_day/HeroElementsIndex.js';
import InfoSection from '../plant_of_the_day/InfoElementsIndex.js';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour
} from '../plant_of_the_day/Data.js';

function PlantOfTheDay() {
  return (
    <>
      <HeroSection/>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default PlantOfTheDay;