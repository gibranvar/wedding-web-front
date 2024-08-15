import React from 'react';
import styled from 'styled-components';
import Button, { ButtonProps } from '../Button/Button';
import { CalendarDaysIcon, GiftIcon, CreditCardIcon } from '@heroicons/react/24/outline';

export type IconType = React.FC<React.SVGProps<SVGSVGElement>>;
interface CardProps {
    title: string;
    subtitleDescription?: string;
    onButtonClick?: () => void;
    subtitle?: string;
    description?: string;
    quote?: string;
    buttonText?: string;
    buttonProps?: ButtonProps;
    textColor?: string;
    hoverTextColor?: string;
    hoverBgColor?: string;
    backgroundColor?: string;
    outlineColor?: string;
    hoverOutlineColor?: string;
    $titleSize?: string;
    IconComponent?: IconType; // Icono dinámico
    date?: string; // Fecha dinámica
    additionalContent?: Array<{ title: string; description: string; IconComponent?: IconType, linkDescription:string, link:string}>; // Contenido adicional
    showButton?: boolean;
}

const breakpoints = {
    xxs: '400.98px',
    xs: '575.98px',
    sm: '767.98px',
    md: '991.98px',
    lg: '1199.98px',
    xl: '1600px',
};

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const CardTitleContainer = styled.div`
    margin-top: 70px;
`;

const CardTitle = styled.img`
    /* font-weight: 100;
    text-align: center; */ 
    /* line-height: 60px;
    color: #a09780; */
`;

const CardSubtitleDescription = styled.p`
    font-weight: 200;
    text-align: center;
    line-height: 23px;
    margin: 30px 0;
    white-space: pre-wrap;
    @media (min-width: ${breakpoints.md}) {
        margin: 30px 70px;}

`;

const CardBottom = styled.div`
    padding: 45px;
    border: 1px solid rgba(160, 151, 128, 1);
    position: relative;
    z-index: 0;
    text-align: center;
    @media (max-width: ${breakpoints.xxs}) {
        padding: 25px;
    }
    &::after {
        position: absolute;
        top: 10px;
        bottom: 10px;
        left: 10px;
        right: 10px;
        content: '';
        background: #f6f4ee;
        z-index: -1;
    }
`;

const CardSubtitle = styled.h2`
    margin-top: 10px;
    margin-bottom: 25px;
    font-size: 35px;
    color: #a09780;
    font-family: 'Cormorant Garamond', serif;
    @media (max-width: ${breakpoints.xs}) {
    font-size: 6.5vw;
  }
  @media (min-width: ${breakpoints.md}) {
    font-size: 3.5vw;
  }
`;

const CardDescription = styled.p`
    font-weight: 250;
    text-align: center;
    font-size: 18px;
    color: #1c1914;
    white-space: pre-wrap;
`;

const CardTextContainer = styled.div`
   

    .align-card {
        align-items: center;
        display: flex;  
        flex-direction: column;
    }

    .card-description {
        margin-top: 5px;
        margin-bottom: 10px;
        text-transform: uppercase;
        font-weight: 100;
        line-height: 20px;
        font-size: 16px;
        letter-spacing: 2.5px;
        white-space: pre-wrap;
        
    }
    
`;

const CardQuote = styled.p`
    margin-bottom: 20px;
    font-weight: 600;
    text-transform: uppercase !important;
    font-size: 18px;
   
`;

const ButtonCard = styled.div`
    align-items: center;
    margin: 20px 12vw 0 12vw;
    @media (max-width: ${breakpoints.xxs}) {
        margin: 20px 8vw 0 8vw;
    }
    @media (min-width: ${breakpoints.md}) {
        margin: 20px 22vw 0 22vw;
  }
`;

// Estilos para el contenido adicional
const AdditionalContentContainer = styled.div`
    margin-top: 20px;

    flex-direction: column;
    align-items:center;
`;

const AdditionalContentItem = styled.div`
    margin-bottom: 20px;
    text-align: center;
    align-items:center;
    display:flex;
    flex-direction:column;
    .icon {
        margin-bottom: 10px;
    }

    h3 {
        margin-top: 10px;
        margin-bottom: 25px;
        font-size: 35px;
        color: #a09780;
        font-family: 'Cormorant Garamond',serif;
        @media (max-width: ${breakpoints.xs}) {
        font-size: 6.5vw;
        }
        @media (min-width: ${breakpoints.md}) {
            font-size: 3.5vw;
        }
  }
        

    p {
        font-weight: 250;
        text-align: center;
        font-size: 18px;
        color: #1c1914;
        white-space: pre-wrap;
        margin:0 20px 15px 20px;
    
        @media (min-width: ${breakpoints.md}) {
        margin: 0 150px;
  }
    }
    a{
        color:#a09780;
        font-style: italic;
        font-weight: bold;
    }
`;

const Card: React.FC<CardProps> = ({
    title,
    subtitleDescription,
    subtitle,
    description,
    quote,
    buttonProps,
    buttonText,
    textColor,
    hoverTextColor,
    hoverBgColor,
    backgroundColor,
    outlineColor,
    hoverOutlineColor,
    onButtonClick,
    IconComponent = CalendarDaysIcon, // Por defecto, CalendarDaysIcon
    date,
    additionalContent = [], // Contenido adicional por defecto vacío
    showButton = true,
}) => {
    const handleButtonClick = () => {
        if (onButtonClick) {
            onButtonClick();
        }
    };

    return (
        <CardContainer>
            <CardTitleContainer>
                <CardTitle data-aos="fade-up" className='title-card' src={title}/>
                <CardSubtitleDescription data-aos="fade-up"
                >{subtitleDescription}</CardSubtitleDescription>
            </CardTitleContainer>
            <CardBottom data-aos="fade-up">
                <CardSubtitle>{subtitle}</CardSubtitle>
                <CardTextContainer>
                    <div className="align-card">
                        <IconComponent className="size-5 text-black" />
                        {date && <p className="card-description">{date}</p>}
                    </div>
                    <CardDescription>{description}</CardDescription>
                </CardTextContainer>
                
                {additionalContent.length > 0 && (
                    <AdditionalContentContainer>
                        {additionalContent.map((content, index) => (
                            <AdditionalContentItem key={index}>
                                 <h3>{content.title}</h3>
                                 {content.IconComponent && <content.IconComponent className="icon size-5 text-black" />}
                               
                                <p>{content.description}</p>
                                <a href={content.link} target='_blank'>{content.linkDescription}</a>
                            </AdditionalContentItem>
                        ))}
                    </AdditionalContentContainer>
                )}
                {quote && <CardQuote>{quote}</CardQuote>}
                
                {showButton && (
                    <ButtonCard>
                        <Button
                            {...buttonProps}
                            label={buttonText}
                            $hoverBgColor={hoverBgColor}
                            $color={textColor}
                            $hoverTextColor={hoverTextColor}
                            $backgroundColor={backgroundColor}
                            $outlineColor={outlineColor}
                            $hoverOutlineColor={hoverOutlineColor}
                            onClick={handleButtonClick}
                        />
                    </ButtonCard>
                )}
            </CardBottom>
        </CardContainer>
    );
};

export default Card;
