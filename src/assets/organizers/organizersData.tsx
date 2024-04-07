import blankAvatar from './blank-avatar.jpg';
import { OrganizerProps } from '@/slices/Organizers';
import { useTranslation } from 'next-export-i18n';
import Michal from "./michal.png";
import Tomek from "./rikardo.png";
import Jakub from "./sylwek.png";
import Jacek from "./jackek.png";
import Felix from "./felix.png";
import Ola from "./ola.jpeg";

export const ORGANIZERS: OrganizerProps[] = [


  {
    image: Michal,
    name: 'Michał Korczak',
    role: 'Organizator Główny, Mistrz Ceremonii',
  },
  {
    image: Tomek,
    name: 'Tomasz Świątek',
    role: "Organizator ds. Sponsorów",
  },
  {
    image: Jakub,
    name: 'Jakub Śliwka',
    role: "Organizator ds. Prelegentów",
  },
  {
    image: Jacek,
    name: 'Jacek Poziemski',  
    role: "Organizator ds. Prelegentów",
  },
  {
    image: Ola,
    name: 'Aleksandra Mokrzan',  
    role: "Organizatorka ds. Marketingu",
  },
 // {
 //   image: blankAvatar,
 //   name: 'Wiktor Rojecki',
 //   role: "Organizator ds. Marketingu",
 // },
  {
    image: Felix,
    name: 'Felix Zieliński',  
    role: "Organizator ds. Strony",
  },
  {
    image: blankAvatar,
    name: 'Przemysław Yaymontt',
    role: "Organizator ds. Wolontariuszy",
  },
];
