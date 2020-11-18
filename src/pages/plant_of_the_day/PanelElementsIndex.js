import React, { useState } from "react";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/book-open.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/calendar.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/heart.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

import {
    Container,
    Content,
    HeadingWithControl,
    Heading,
    Controls,
    PrevButton,
    NextButton,
    CardSlider,
    Card,
    CardImage,
    TextInfo,
    TitleReviewContainer,
    Title,
    RatingsInfo,
    Rating,
    Description,
    SecondaryInfoContainer,
    IconWithText,
    IconContainer,
    Text,
    PrimaryButton
  } from './PanelElements';

  export default () => {
    // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
    const [sliderRef, setSliderRef] = useState(null);
    const sliderSettings = {
      arrows: false,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
          }
        },
  
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    };

  const cards = [
    {
      imageSrc: "https://images.unsplash.com/photo-1559124058-0d6a4fe38bea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      title: "Mojito Mint",
      description: "General description goes here.",
      date: "Nov.16",
      level: "Intermediate",
      like: "29 Likes",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1545696648-8e941296a2ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      title: "Aloe Vera",
      description: "General description goes here.",
      date: "Nov.17",
      level: "Beginner",
      like: "22 Likes",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1524492449090-a4e289316d9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1884&q=80",
      title: "Spider Plant",
      description: "General description goes here.",
      date: "Nov.18",
      level: "Intermediate",
      like: "33 Likes",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1576678711208-9ab2442b990a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1826&q=80",
      title: "Phalaenopsis",
      description: "General description goes here.",
      date: "Nov.19",
      level: "Beginner",
      like: "66 Likes",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1573256815039-69d5f81f894f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      title: "Lavender Tree",
      description: "General description goes here.",
      date: "Nov.15",
      level: "Difficult",
      like: "18 Likes",
    },
  ]

  return (
    <Container id='panel'>
      <Content>
        <HeadingWithControl>
          <Heading>Plant of the day gallery</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  <RatingsInfo>
                    <StarIcon />
                    <Rating>{card.like}</Rating>
                  </RatingsInfo>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{card.date}</Text>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <PriceIcon />
                    </IconContainer>
                    <Text>{card.level}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
          <PrimaryButton>More info with the {card.title}</PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
