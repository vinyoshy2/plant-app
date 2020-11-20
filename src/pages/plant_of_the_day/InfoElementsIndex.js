import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  Button,
  PrevButton,
  NextButton,
  Controls
} from './InfoElements';

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2
}) => {

  const [picIndex, setPicIndex] = useState(0)
  const [pic, setPic] = useState(img[picIndex]);
  
  function changePicIndex(moveRight) {
    if (moveRight == true) {
      if (picIndex != img.length-1) {
        setPicIndex(picIndex+1)
      } else {
        setPicIndex(0)
      }
    } else {
      if (picIndex == 0) {
        setPicIndex(img.length-1)
      } else {
        setPicIndex(picIndex-1)
      }
    }
  }

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
      
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button as={Link}
                    to= {{
                        pathname: "/project-list",
                        state: {
                            name: {id}
                        }
                    }}>
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={pic} alt={alt} />
              </ImgWrap>
              <BtnWrap>
              <Controls>
              <PrevButton onMouseDown={() => {changePicIndex(false)}} onClick={() => {setPic(img[picIndex])}}><ChevronLeftIcon/></PrevButton>
              </Controls>
              <Controls>
              <NextButton onMouseDown={() => {changePicIndex(true)}} onClick={() => {setPic(img[picIndex])}}><ChevronRightIcon/></NextButton>
              </Controls>
              </BtnWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
