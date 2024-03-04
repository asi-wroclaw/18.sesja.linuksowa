import { SpeakerProps } from '@/slices/Speakers';
import blankAvatar from './blank-avatar.jpg';
import Siewca from './siewca.webp';
import Vovcia from './vovcia.webp';
import Piotrowski from './piotrowski.webp';
import Szewczyk from './szewczyk.webp';
import Wysocki from './wysocki.webp';
import Wlazlyn from './wlazlyn.webp';

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
  {
    image: Wysocki,
    urls: {
      website: '',
      twitter: '',
      linkedin: '',
      github: '',
    },
    name: 'Rafał Wysocki',
    description: [
      "Rafael maintains the power management infrastructure, thermal control core and ACPI support core code in the Linux kernel. He has been maintaining Linux kernel code since 2009 and has been contributing to Linux since 2005 (power management, ACPI support, PCI support, thermal control, driver core. device and processor hot-plug). He works at Intel, focuses on the mainline Linux kernel development and contributes to the ACPI specification process.  Before joining Intel in 2012 he worked at the Faculty of Physics of the University of Warsaw and ran a Linux and IT consulting business of his own. Since 2008 he has presented at multiple Linux-related events worldwide, including the Linux Plumbers Conference, Kernel Recipes, Open Source Summit North America/EU, the Linux Foundation Collaboration Summit, LinuxCon (North America/Japan/EU), Linux.conf.au, LinuxTag, and Ottawa Linux Symposium. Rafael holds a PhD in physics from the University of Warsaw, Poland (2002).",
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
    name: 'Maciej Lasyk',
    description: [
      '',
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
    name: 'Filip Dorosz',
    description: [
      'DevOps Engineer with passion. My main interest lies in SRE and observability. I really do believe in Open Source software. While debugging performance issues I mainly listen to Synthwave music and Neue Deutsche Härte',
    ],
  },
  {
    image: Wlazlyn,
    urls: {
      website: '',
      twitter: '',
      linkedin: '',
      github: '',
    },
    name: 'Patryk Wlazłyń',
    description: [
      'Software engineer, firmware, drivers and everything that has to be small or run fast.',
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
    name: 'Dominik Mierzejewski',
    description: [
      'Long time open source contributor. Fedora user and developer. Maintains over 100 software packages and holds various community roles, including being a Fedora ambassador, packager sponsor and proven packager.',
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
    name: 'Piotr Pyciński',
    description: [
      '15-letnie doświadczenie jako administrator systemów. Moje początki miały miejsce w czasach, gdy praca przy konsoli i fizycznych serwerach było standardem, a szum wentylatorów towarzyszył codziennym czynnościom. Obecnie staram się odnaleźć w świecie bujającym w chmurach i często podkreślam, że nie jest to uniwersalne rozwiązanie dla wszystkich problemów. Poza pracą lubię żeglować po morzach i oceanach oraz pracuję jako ratownik medyczny w Krakowskim Pogotowiu Ratunkowym.',
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
    name: 'Krzysztof Biegański',
    description: [
      'Krzysztof is a Senior Software Engineer at Antmicro. In his everyday work, he mostly focuses on open source SystemVerilog tooling. He is one of the main contributors to Verilator, responsible for, among other things, extending the scheduler in Verilator to support timing constructs.',
    ],
  },
];
