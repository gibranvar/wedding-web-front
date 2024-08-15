import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';
import Card from '../../components/Card/Card';
import CalendarSection from '../../components/CalendarSection/CalendarSection';
import HeroSection from '../../components/HeroSection/HeroSection';
import GallerySection from '../../components/Carousel/Carousel';
import Itenerary from '../../components/Itinerary/Itinerary';
import Navbar from '../../components/Navbar/Navbar';
import DresscodeIcon from '../../assets/img/secondaryImg/dresscode.svg';
import { CalendarDaysIcon, GiftIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import dressCodeImg from '../../assets/img/dresscode.svg'
import whereImg from '../../assets/img/where.svg'
import giftsImg from '../../assets/img/gifts.svg'
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer';
import Footer from '../../components/Footer/Footer';
import RsvpSection from '../../components/RsvpSection/RsvpSection';
const breakpoints = {
  xxs: '400.98px',
  xs: '575.98px',
  sm: '767.98px',
  md: '991.98px',
  lg: '1199.98px',
  xl: '1600px',
};

const Intro = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 725px;
  padding-bottom: 1.130em;
  text-align: center;
  margin: 55px 0;
  @media (min-width: ${breakpoints.md}) {
    padding-left: 20vw;
    padding-right: 20vw;
    padding-top: 790px;
    padding-bottom: 0px;
  }
`;

const IntroDescription = styled.p`
  font-weight: 100;
  font-size: 1.1em;
  line-height: 22px;
`;

const DresscodeContainer = styled.div`
  margin: 10px 20px;
  
  .dresscode-title {
   
}
  
  .dresscode-subtitle {
    text-align: center;
    font-weight: 250;
    font-size: 25px;
    margin: 15px 0;
    @media (max-width: ${breakpoints.xs}) {
    font-size: 5vw;
    margin: 0;
  }
  @media (min-width: ${breakpoints.md}) {
    font-size: 2.5vw;
  }
  }
  
  .dresscode-img-container {
    margin: 20px 15px 0 15px;
    justify-content: center;
    align-self:center;

  }
  .dresscode-img{
    @media (min-width: ${breakpoints.xs}) {
    width: 70%;
    margin: 0 auto;
  }
    @media (min-width: ${breakpoints.md}) {
    width: 30%;
    margin: 0 auto;
  }
  }
  .dresscode-description {
    font-weight: 200;
    font-size: 12px;
    margin: 0 15px;
    @media (min-width: ${breakpoints.md}) {
    text-align:center;
    font-size: 13px;
  }
  }
`;

const FAQ = styled.div`
  margin: 15px 18px;
  .where-container{
  
  }
  @media (min-width: ${breakpoints.md}) {
    margin: 15px 180px 50px 180px;
    gap: 30px;
  }
`
type ActiveSection =
  | ''
  | 'calendar'
  | 'itinerary'
  | 'dresscode'
  | 'where'
  | 'gifts'
  | 'rsvp'
  | 'gallery';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>('');
  // Referencias a las secciones para Intersection Observer
  const sectionsRef = useRef<{
    calendar: HTMLDivElement | null;
    itinerary: HTMLDivElement | null;
    dresscode: HTMLDivElement | null;
    where: HTMLDivElement | null;
    gifts: HTMLDivElement | null;
    rsvp: HTMLDivElement | null;
    gallery: HTMLDivElement | null;
  }>({
    calendar: null,
    itinerary: null,
    dresscode: null,
    where: null,
    gifts: null,
    rsvp: null,
    gallery: null,
  });

  // Configuración del Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as ActiveSection);
          }
        });
      },
      { threshold: 0.5 } // Cambia el umbral según sea necesario
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      Object.values(sectionsRef.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const openMap = () => {
    window.open('https://maps.app.goo.gl/RGj1d5cVXbnCg28J9', '_blank', 'noopener,noreferrer');
  };

  return (
      <div>
      <Navbar activeSection={activeSection} />
      <HeroSection />
      <Intro data-aos="zoom-in-up"
     data-aos-offset="800">
        <IntroDescription >
          Hay eventos en la vida que son muy especiales por sí solos, pero poder compartirlos con quienes más queremos, los convierte en momentos únicos e inolvidables.
        </IntroDescription>
        <br />
        <IntroDescription>¡Te esperamos en nuestra boda!</IntroDescription>
      </Intro>
      <div id='calendar' ref={(el) => (sectionsRef.current.calendar = el)}>
        <CalendarSection
          title="Nuestro día"
          buttonText="AGREGAR AL CALENDARIO"
          textColor="#1c1914"
          backgroundColor="#F2EDE7"
          hoverBgColor="transparent"
          hoverOutlineColor="#F2EDE7"
          hoverTextColor="#F2EDE7"
        />
      </div>
      <div id='itinerary' ref={(el) => (sectionsRef.current.itinerary = el)}>
        <Itenerary />
      </div>
      <div id='dresscode' ref={(el) => (sectionsRef.current.dresscode = el)}>
        <DresscodeContainer>
          <img className="title-dresscode" data-aos="fade-up"
          data-aos-anchor-placement="top-center" src={dressCodeImg} />
          <p data-aos="fade-up"
          data-aos-anchor-placement="top-center" className='dresscode-subtitle'>Rigurosa Etiqueta</p>
          <div className='dresscode-img-container' data-aos="fade-up"
          data-aos-anchor-placement="top-center">
            <img className='dresscode-img' src={DresscodeIcon} alt="" />
            <p className='dresscode-description'>Las mujeres deben evitar vestir de color negro o blanco* </p>
          </div>
        </DresscodeContainer>
      </div>
      <FAQ>
        <div className='where-container' id='where' ref={(el) => (sectionsRef.current.where = el)}>
          <Card
            title={whereImg}
            date={`Sábado\n5 de Abril de 2025`}
            subtitleDescription="A continuación encontrarás el horario y ubicación de nuestra boda, así como un botón directo a Google Maps para que te sea más fácil llegar al lugar."
            subtitle="La Casona"
            description="Rancho Blanco - Espiritu Santo Km 3, Xinte, 54570, Estado de México."
            buttonText="VER UBICACIÓN"
            hoverBgColor="transparent"
            textColor="#F2EDE7"
            backgroundColor="#1c1914"
            hoverTextColor="#1c1914"
            hoverOutlineColor="#1c1914"
            onButtonClick={openMap}
          />
        </div>
        <div  id='gifts' ref={(el) => (sectionsRef.current.gifts = el)}>
          <Card
            title={giftsImg}
            subtitleDescription={`¡Gracias por formar parte de nuestro inicio como familia!\nPara aquellos que deseen contribuir con un regalo, ofrecemos varias opciones:\nMesa de regalos y Depósito.`}
            description={`Depósito en Cuenta Banco: BBVA\nNúmero de Cuenta: 150 578 0522\nCLABE: 012 180 01505780522 9\nConcepto: Boda A&G\nA nombre de: Ana Paula Mendoza`}
            subtitle='Regalo Monetario'
            quote="Tu presencia es el mejor regalo. ¡Gracias!"
            buttonText="MÁS INFORMACIÓN"
            hoverBgColor="transparent"
            textColor="#F2EDE7"
            backgroundColor="#1c1914"
            hoverTextColor="#1c1914"
            hoverOutlineColor="#1c1914"
            IconComponent={CreditCardIcon}
            showButton={false}
            additionalContent={[
              {
                title: "Mesa de Regalos",
                description: `Para acceder a nuestra mesa de regalos, por favor haz clic en el siguiente enlace y utiliza el número de evento:\n51475721`,
                IconComponent: GiftIcon,
                link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51475721",
                linkDescription: 'Haz clic aquí para visitar nuestra mesa de regalos'
              }
            ]}
          />
          </div>
        </FAQ> 

      <div id="rsvp" ref={(el) => (sectionsRef.current.rsvp = el)}>
        <RsvpSection 
        title='RSVP'
        />
      </div> 
      <div id='gallery' ref={(el) => (sectionsRef.current.gallery = el)}>
        <GallerySection
          buttonText="VER MÁS"
          hoverBgColor="transparent"
          textColor="#F2EDE7"
          backgroundColor="#1c1914"
          hoverTextColor="#1c1914"
          hoverOutlineColor="#1c1914"
        />
      </div>
      <MusicPlayer />
      <Footer />
      </div>
      )}

export default Home;
