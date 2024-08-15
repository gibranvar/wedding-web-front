import React from "react";
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import "./styles.css"
interface Event {
  title: string;
  start: Date;
  end: Date;
  description: string;
  location: string;
}

interface iCalendarButtonProps {
  event: Event;
  buttonText: string;
}
const iCalendarButton: React.FC<iCalendarButtonProps> = () => {
  return (
    <div className="customButtonContainer"><AddToCalendarButton
    name="Nuestra Boda: Ana & Giovanni"
  description="UNETE A NOSOTROS EN LA CELEBRACIÓN DE NUESTRO AMOR ETERNO."
  startDate="2025-04-05"
  startTime="17:00"
  endDate="2025-04-06"
  endTime="02:00"
  timeZone="America/Mexico_City"
  location="La Casona de Zona Esmeralda https://g.co/kgs/DVm3WGe"
  options="'Apple','Google'"
  buttonStyle="3d"
  hideBackground
  hideCheckmark
  size="3"
  lightMode="light"
  language="es"
  label="AGREGAR AL CALENDARIO" 
  hideBranding="true"
  ></AddToCalendarButton></div>
    
  );
};

export default iCalendarButton;
