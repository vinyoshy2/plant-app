import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { Link } from 'react-scroll';

export const Container = tw.div`relative`;
export const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;
export const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const SectionHeading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`;
export const Heading = tw(SectionHeading)``;
export const Controls = tw.div`flex items-center`;
const PrimaryButtonBase = tw.button`px-8 py-3 font-bold rounded bg-blue-500 text-gray-100 hocus:bg-green-400 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
export const PrevButton = tw(ControlButton)`bg-gray-500 hover:bg-green-400 rounded sm:rounded-full sm:rounded-br-full`;
export const NextButton = tw(ControlButton)`bg-gray-500 hover:bg-green-400 rounded sm:rounded-full sm:rounded-br-full`;
export const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
export const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-3xl sm:rounded-br-3xl relative focus:outline-none`;
export const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-3xl`
]);

export const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
export const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
export const Title = tw.h5`text-2xl font-bold`;

export const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
export const Rating = tw.span`ml-2 font-bold`;

export const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

export const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
export const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
export const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
export const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

export const Button = styled(Link)`
  border-radius: 50px;
  background: #01BF71;
  white-space: nowrap;
  padding: 14px 48px;
  color: #000000;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0a945b;
    
  }
`;