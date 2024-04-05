import blankAvatar from './blank-avatar.jpg';
import { OrganizerProps } from '@/slices/Organizers';
import { useTranslation } from 'next-export-i18n';

function getTranslation() {
  const { t } = useTranslation('common');
  return t('team');
}

export const ORGANIZERS: OrganizerProps[] = [


  {
    image: blankAvatar,
    name: 'Michał Korczak',
    role: getTranslation(),
  },
  {
    image: blankAvatar,
    name: 'Tomasz Świątek',
    role: "Organizator ds. Sponsorów",
  },
  {
    image: blankAvatar,
    name: 'Jakub Śliwka',
    role: "Organizator ds. Prelegentów",
  },
  {
    image: blankAvatar,
    name: 'Jacek Poziemski',  
    role: "Organizator ds. Prelegentów",
  },
  {
    image: blankAvatar,
    name: 'Aleksandra Mokrzan',  
    role: "Organizatorka ds. Marketingu",
  },
  {
    image: blankAvatar,
    name: 'Wiktor Rojecki',  
    role: "Organizator ds. Marketingu",
  },
  {
    image: blankAvatar,
    name: 'Felix Zieliński',  
    role: "Organizator ds. Strony",
  },
  {
    image: blankAvatar,
    name: 'Przemysław Yaymontt',
    role: "Organizator ds. Wolontariuszy",
  },
];
