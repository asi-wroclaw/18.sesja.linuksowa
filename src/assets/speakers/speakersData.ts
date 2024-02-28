import { SpeakerProps } from '@/slices/Speakers';
import blankAvatar from './blank-avatar.jpg';
import Siewca from './siewca.webp';
import Vovcia from './vovcia.webp';
import Piotrowski from './piotrowski.webp';
import Szewczyk from './szewczyk.webp';

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
    image: Szewczyk,
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
    image: Piotrowski,
    urls: {
      website: '',
      twitter: '',
      linkedin: '',
      github: '',
    },
    name: 'Mateusz Piotrowski',
    description: [
      'Mateusz Piotrowski is a Systems Engineer based in Berlin, Germany. He has been contributing to open source for a long time, primarily to the FreeBSD and OpenZFS projects. Since 2022, he has been serving on the FreeBSD Core Team. Professionally, he consults companies around performance engineering and open-source development.',
    ],
  },
];
