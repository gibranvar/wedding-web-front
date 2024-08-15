import React from "react";
import ICalendarButton from "./iCalendarButton"; 
import styled from "styled-components";
import Countdown from "../Timer/Timer";
import { images } from '../../helpers/images';
import imgLogo from "../../assets/img/nuestro-dia.svg"
const backgroundImage = images[14];
const breakpoints = {
  xxs: '400.98px',
  xs: '575.98px',
  sm: '767.98px',
  md: '991.98px',
  lg: '1199.98px',
  xl: '1600px',
};

interface CalendarSectionProps {
  title?: string;
  buttonText: string;
  textColor: string;
  backgroundColor: string;
  hoverBgColor: string;
  hoverOutlineColor: string;
  hoverTextColor: string;
}

const CalendarSectionContainer = styled.div`
  filter: grayscale(100%);
  background-image: url(${backgroundImage.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #F2EDE7;
  padding: 70px 0;
  text-align: center;
  position: relative;
  @media (min-width: ${breakpoints.md}) {
    padding: 40px 0 60px 0;
  }
`;
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.4);
`;
const TextContainer = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: center;
  color: #f0f0f0;
  z-index: 2;
`;
const CalendarSectionTitle = styled.div`

`;
const CalendarSubtitle = styled.div`
margin:0;

`
const Subtitle = styled.h2`
  font-weight:200;
  font-size: 16px;
  color: white;
  font-family: 'Karla', sans-serif !important;
  @media (min-width: ${breakpoints.md}) {
    font-size: 20px;
  }
  @media (max-width: ${breakpoints.xs}) {
    font-size: 3vw;
  }

`
const CalendarSectionTimer = styled.div`
  margin-top: -10px;
  margin-bottom: 20px;
`;

const CalendarSectionButtonContainer = styled.div`
  margin: 0 15vw;
  @media (max-width: ${breakpoints.xxs}) {
    margin: 0 20vw;
  }
  @media (min-width: ${breakpoints.md}) {
    margin: 0 5vw;
  }
`;

const CalendarSection: React.FC<CalendarSectionProps> = ({
  buttonText,
}) => {
  const eventDetails = {
    title: "Nuestra Boda: Ana y Giovanni",
    start: new Date('2025-04-05T17:00:00'),
    end: new Date('2025-04-05T02:00:00'), // Revisa la fecha de finalización
    description: "Descripción del evento.",
    location: "Ubicación del evento"
  };

  return (
    <CalendarSectionContainer>
      <Overlay/>
      <TextContainer data-aos="flip-left">
        <CalendarSectionTitle><img className="title-calendar" src={imgLogo} alt="" /></CalendarSectionTitle>
        <CalendarSubtitle>
          <Subtitle>Sábado 5 de Abril, 2025</Subtitle>
        </CalendarSubtitle>
        <CalendarSectionTimer>
          <Countdown targetDate="2025-04-05T14:25:00" />
        </CalendarSectionTimer>
        <CalendarSectionButtonContainer>
          <ICalendarButton event={eventDetails} buttonText={buttonText} />
        </CalendarSectionButtonContainer>
      </TextContainer>
    </CalendarSectionContainer>
  );
}

export default CalendarSection;
