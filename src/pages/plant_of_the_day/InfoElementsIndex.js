import React, {useState} from 'react';
import { Link } from 'react-router-dom';

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
  Button
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
  
  function returnToFirstPic() {
    if (picIndex == img.length-1) {
      setPicIndex(0);
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
              <Button onMouseDown={() => {setPicIndex(picIndex+1)}} onClick={() => {setPic(img[picIndex]); returnToFirstPic()}}>More Photos</Button>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
