import styled from 'styled-components';
import { Link } from 'react-scroll';
import tw from "twin.macro";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};
  /* Must use '\' css class \'' */

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  margin-left: 35px;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.div`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const HeadText = styled.p`
  margin-left: 10px;
  margin-right: 10px;
  height: 100px;
  background: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
  text-align: center;
  color: ${({ darkText }) => (darkText ? '#fff' : '#010606')};
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const SubtitleContainer = styled.p`
  height: 40px;
  max-width: 440px;
  margin-bottom: 35px;
  line-height: 24px;
  display: flex;
`;

export const SubtitleImg = styled.div`
  height: 40px;
  width: 4px;
  padding-top: 6px;
  padding-left: 3px;
  color: #10c753;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-left: 35px;
  padding-top: 7px;
  font-size: 20px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const Subtitle2 = styled.p`
  max-width: 440px;
  margin-left: 8px;
  padding-top: 7px;
  font-size: 20px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  max-height: 750px;
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;
`;

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
export const Controls = tw.div`w-64 ml-3 flex items-center`;

const PrimaryButtonBase = tw.button`px-8 py-3 font-bold rounded bg-blue-500 text-gray-100 hocus:bg-green-400 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
export const PrevButton = tw(ControlButton)`first:ml-40 w-16 bg-gray-500 hover:bg-green-400 rounded sm:rounded-full sm:rounded-br-full`;
export const NextButton = tw(ControlButton)`first:ml-6 w-16 bg-gray-500 hover:bg-green-400 rounded sm:rounded-full sm:rounded-br-full`;
