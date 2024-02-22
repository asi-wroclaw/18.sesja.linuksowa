import { SpeakerProps } from '@/slices/Speakers';
import blankAvatar from './blank-avatar.jpg';
import FilipDrapejkowski from './Filip_Drapejkowski.webp';
import InformatykZakladowy from './Informatyk_Zakladowy.webp';
import CezaryDynak from './Cezary_Dynak.webp';
import Mewp from './mewp.webp';
import Siewca from './siewca.webp';
import Vovcia from './vovcia.webp';
import KamilGalek from './Kamil_Galek.webp';
import RJW from './RJW.webp';
import Pycinski from './Pycinski.webp';
import Dorosz from './Dorosz.webp';
import Opasiak from './Opasiak.webp';
import Sobkowski from './msobkowski.png';

export const SPEAKERS: SpeakerProps[] = [
  {
    image: Siewca,
    urls: {
      website: '',
      twitter: '',
      linkedin: '',
      github: '',
    },
    name: 'Jakub Juszczakiewicz',
    description: [
      'Pasjonat Linuksa i Otwartego oprogramowania. Zawodowo sysadmin i programista niskopoziomowy - aktualnie podwykonawca w jednej z międzynarodowych kombinatów informatycznych. Prywatnie m.in. zapalony jeździec konny i żeglarz jachtowy oraz fotograf, jak również miłośnik gór.',
    ],
  },
  {
    image: Vovcia,
    urls: {
      website: '',
      twitter: '',
      linkedin: '',
      github: '',
    },
    name: 'Vladimir Mitiouchev',
    description: [
      'Administrator, programista, architekt. Współzałożyciel fundacji CLUG.',
    ],
  },
  {
    image: blankAvatar,
    urls: {
      website: '',
      twitter: '',
      linkedin: '',
      github: '',
    },
    name: 'Kamila Szewczyk',
    description: [
      'A full-time student in Germany. A programmer and aspiring mathematician, primarily interested in compiler construction, data compression, esoteric languages, statistics and numerical algorithms. Maintainer of various Linux tools and packages.',
    ],
  },
  {
    image: blankAvatar,
    urls: {
      website: '',
      twitter: '',
      linkedin: '',
      github: '',
    },
    name: 'Ignat Korchagin',
    description: [
      'Ignat is a systems engineer at Cloudflare working mostly on Linux, platforms and hardware security. Ignat’s interests are cryptography, hacking, and low-level programming. Before Cloudflare, Ignat worked as a senior security engineer for Samsung Electronics’ Mobile Communications Division. His solutions may be found in many older Samsung smart phones and tablets. Ignat started his career as a security researcher in the Ukrainian government’s communications services.',
    ],
  },
];
