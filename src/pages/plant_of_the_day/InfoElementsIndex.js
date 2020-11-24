import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import { ReactComponent as Water } from "feather-icons/dist/icons/droplet.svg";
import { ReactComponent as Sun } from "feather-icons/dist/icons/sun.svg";
import { ReactComponent as Temperature } from "feather-icons/dist/icons/wind.svg";
import { ReactComponent as Flag } from "feather-icons/dist/icons/flag.svg";
import { ReactComponent as Difficulty } from "feather-icons/dist/icons/book-open.svg";
import { ReactComponent as QuestionMark } from "@ant-design/icons/svg/outline/question-circle.svg";

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
  Controls,
  SubtitleContainer,
  SubtitleImg,
  Subtitle2
} from './InfoElements';
import { Tooltip } from 'react-bootstrap';

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
  dark2,
  attributes
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
                <SubtitleContainer>
                  <SubtitleImg><Water/></SubtitleImg>
                  <Subtitle darkText={darkText}>Water:</Subtitle>
                  <Subtitle2 darkText={darkText}>{attributes[0]}</Subtitle2>
                </SubtitleContainer>
                <SubtitleContainer>
                  <SubtitleImg><Sun/></SubtitleImg>
                  <Subtitle darkText={darkText}>Light:</Subtitle>
                  <Subtitle2 darkText={darkText}>{attributes[1]}</Subtitle2>
                </SubtitleContainer>
                <SubtitleContainer>
                  <SubtitleImg><Temperature/></SubtitleImg>
                  <Subtitle darkText={darkText}>Temperature:</Subtitle>
                  <Subtitle2 darkText={darkText}>{attributes[2]}</Subtitle2>
                </SubtitleContainer>
                <SubtitleContainer>
                  <SubtitleImg><Flag/></SubtitleImg>
                  <Subtitle darkText={darkText}>Site:</Subtitle>
                  <Subtitle2 darkText={darkText}>{attributes[3]}</Subtitle2>
                </SubtitleContainer>
                <SubtitleContainer>
                  <SubtitleImg><Difficulty/></SubtitleImg>
                  <Subtitle darkText={darkText}>Difficulty:</Subtitle>
                  <Subtitle2 darkText={darkText}>{attributes[4]}</Subtitle2>
                </SubtitleContainer>
                
                <BtnWrap>
                  <Button as={Link}
                    to= {{
                        pathname: "/project-list",
                        state:{
                          filter1: "Large",
                          filter2: "Full sun",
                          filter3: "Humid"
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
