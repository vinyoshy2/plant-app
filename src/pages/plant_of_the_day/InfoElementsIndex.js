import React from 'react';
import { Button } from '../plant_of_the_day/ButtonElements.js';
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
  Card,
  Column,
  ThreeColumnContainer
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
  dark2,
  imageSrc,
  imageContainerCss = null,
  imageCss = null,
  title1,
  descriptions1,
  title2,
  descriptions2,
  title3,
  descriptions3,
  title4,
  descriptions4,
  title5,
  descriptions5,
  title6,
  descriptions6,
}) => {
  console.log(primary);
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
                <ThreeColumnContainer>
                  <Column>
                    <Card>
                      <span className="imageContainer" css={imageContainerCss}>
                        <img src={imageSrc} alt="" css={imageCss} />
                      </span>
                      <span className="title" style={{ color:"#000000" }}>{title1}</span>
                      <p className="description">{descriptions1}</p>
                    </Card>
                  </Column>

                  <Column>
                    <Card>
                      <span className="imageContainer" css={imageContainerCss}>
                        <img src={imageSrc} alt="" css={imageCss} />
                      </span>
                      <span className="title" style={{ color:"#000000" }}>{title2}</span>
                      <p className="description">{descriptions2}</p>
                    </Card>
                  </Column>

                  <Column>
                    <Card>
                      <span className="imageContainer" css={imageContainerCss}>
                        <img src={imageSrc} alt="" css={imageCss}/>
                      </span>
                      <span className="title" style={{ color:"#000000" }}>{title3}</span>
                      <p className="description">{descriptions3}</p>
                    </Card>
                  </Column>

                  <Column>
                    <Card>
                      <span className="imageContainer" css={imageContainerCss}>
                        <img src={imageSrc} alt="" css={imageCss} />
                      </span>
                      <span className="title" style={{ color:"#000000" }}>{title4}</span>
                      <p className="description">{descriptions4}</p>
                    </Card>
                  </Column>

                  <Column>
                    <Card>
                      <span className="imageContainer" css={imageContainerCss}>
                        <img src={imageSrc} alt="" css={imageCss} />
                      </span>
                      <span className="title" style={{ color:"#000000" }}>{title5}</span>
                      <p className="description">{descriptions5}</p>
                    </Card>
                  </Column>

                  <Column>
                    <Card>
                      <span className="imageContainer" css={imageContainerCss}>
                        <img src={imageSrc} alt="" css={imageCss} />
                      </span>
                      <span className="title" style={{ color:"#000000" }}>{title6}</span>
                      <p className="description">{descriptions6}</p>
                    </Card>
                  </Column>
                </ThreeColumnContainer>
                <BtnWrap>
                  <Button
                    to=''
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
