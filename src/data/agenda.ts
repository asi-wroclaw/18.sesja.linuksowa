export type SpeechItem = {
  start: string;
  end: string;
  title: string;
  author?: string;
  description?: string[];
  lang?: ('en' | 'pl')[];
  recording?: string;
};

export const SATURDAY_AGENDA: SpeechItem[] = [
  {
    start: '9:00',
    end: '',
    title: 'Registration',
  },
  {
    start: '9:45',
    end: '10:00',
    title: 'Opening Talk',
    author: 'Michał Korczak',
    recording: 'https://www.youtube.com/watch?v=J-0oZFlSpcQ',
  },
  {
    start: '10:00',
    end: '10:50',
    title: 'eBPF w Linuxie: Badanie wydajności i nie tylko',
    author: 'Filip Dorosz, OVHcloud',
    lang: ['pl'],
    description: [
      'Co to właściwie jest eBPF i czemu warto go używać? Jak używać eBPF? Czy można tak zobaczyć coś użytecznego? Na te i wiele więcej pytań padną odpowiedzi w trakcie ekscytującej (a jakże!) prezentacji która pokaże jak można badać wydajność (i nie tylko!) systemu Linux.',
    ],
    recording: 'https://www.youtube.com/watch?v=lcqC_9G8-h4',
  },
  {
    start: '11:00',
    end: '11:50',
    title: 'Jak napisałem sobie komputer?',
    author: 'Piotr Węgrzyn',
    lang: ['pl'],
    description: [
      'Opowiem o 4-letniej przygodzie, w której jeszcze jako licealista, od zupełnych podstaw napisałem swój własny procesor - a właściwie pełnoprawny komputer, bo można do niego podłączyć klawiaturę, monitor, kartę SD, czy... drukarkę igłową.',
      '',
      'Będzie trochę o samym początku - pierwszych projektach, mikroarchitekturach, kompilatorach, systemie operacyjnym, aż po układy krzemowe. Oczywiście nie obędzie się też bez dema!',
    ],
    recording: 'https://www.youtube.com/watch?v=CsCnZ7DKQQ4',
  },
  {
    start: '12:00',
    end: '12:50',
    title: 'Demon w trampkach, czyli pełne zanurzenie w ekosystem FreeBSD',
    author: 'Mateusz Piotrowski',
    lang: ['pl'],
    description: [
      'FreeBSD jest systemem operacyjnym wywodzącym się w prostej linii z legendarnego systemu Unix i jest kontynuacją projektu BSD (pierwszego otwartego systemu operacyjnego w historii). W ciągu ponad 30 lat swojego istnienia projekt FreeBSD nie tylko rozwiną się technologicznie, ale również wypracował kulturę, procesy i struktury, które scalają społeczność i pozwalają na sprawne funkcjonowanie projektu tworzonego przez tysiące osób z całego świata.',
      '',
      'Podczas prelekcji poznamy odpowiedzi na kilka podstawowych pytań ze świata FreeBSD. Kto jest kim i jak zostać kimś? Co jest czym i jak się czymś zająć? Innymi słowy, skupimy się na takich rzeczach, jak:',
      '',
      '1. Struktury i dynamiki rządzące dużym projektem otwartego oprogramowania jak FreeBSD',
      '',
      '2. Znane wdrożenia FreeBSD w branży i uczestnictwo dużych graczy w ekosystemie',
      '',
      '3. Zalety systemu FreeBSD, ale również wyzwaniach, z którymi mierzy się teraz społeczność',
      '',
      '4. Pierwsze kroki w otwartym oprogramowaniu, które pozwolą Ci zacząć kontrybuować do dużego systemu operacyjnego (używanego przez co najmniej dwie litery z akronimu MANGA)',
      '',
      '',
      'https://www.freebsd.org/',
      'https://freebsdfoundation.org/',
      'https://www.facesofopensource.com/bsd/',
    ],
    recording: 'https://www.youtube.com/watch?v=ZseCIIKKO5g',
  },
  {
    start: '13:00',
    end: '14:00',
    title: 'Przerwa & Networking',
  },
  {
    start: '14:00',
    end: '14:50',
    title: 'Multimedia w Fedorze: przeszłość, teraźniejszość i przyszłość',
    author: 'Dominik Mierzejewski',
    lang: ['pl'],
    description: [
      'Fedora jest historycznie jedyną z dziesięciu najpopularniejszych dystrybucji Linuksa, w której brakuje znaczącej części oprogramowania multimedialnego, głównie z uwagi na wykluczenie z dystrybucji pakietu FFmpeg z powodów prawnych. W lutym 2022, sytuacja uległa zmianie dzięki wprowadzeniu okrojonej wersji FFmpeg. Prezentacja obejmie historię oprogramowania multimedialnego w Fedorze oraz jego obecny status. Opowiem o Multimedia SIG oraz naszych planach na przyszłość.',
    ],
    recording: 'https://www.youtube.com/watch?v=3SO67I1lo3c',
  },
  {
    start: '15:00',
    end: '15:50',
    title: 'SELinux & Kubernetes bez doktoratu',
    author: 'Vladimir Mitiouchev',
    lang: ['pl'],
    description: [
      'Jak użyć SELinux do zabezpieczenia kontenerów w Kubernetes, bez robienia z niego doktoratu. W prezentacji nie ma audit2allow, ani SELINUX=disabled, za to jest live demo.',
    ],
    recording: 'https://www.youtube.com/watch?v=BSrDbIdwyqE',
  },
  {
    start: '16:00',
    end: '16:50',
    title: 'Kilka ciekawostek z (pre)historii informatyki',
    author: 'Jakub Juszczakiewicz',
    lang: ['pl'],
    description: [
      'Opowiem kilka ciekawostek z (pre)historii informatyki których skutki dalej kształtują rozwój tej branży.',
    ],
    recording: 'https://www.youtube.com/watch?v=5rqovtExVOI',
  },
  {
    start: '17:00',
    end: '17:50',
    title: 'Porting a 10-year-old game to Android',
    author: 'Artur Frenszek-Iwicki',
    lang: ['en'],
    description: [
      'Colorful is a small game originally created in 48 hours for the Ludum Dare game jam, December 2012 edition. The game was written in Pascal and made available for desktop Linux and Windows. In 2022, the game received a version 2.0 re-release, including a port to Android.',
      '',
      'In this talk, I will go over the process of porting the game to Android, showcasing the technical challenges involved (like getting the build system to work in the first place) and design quirks that needed to be ironed out.',
    ],
    recording: 'https://www.youtube.com/watch?v=xi8KIx5IMzw',
  },
];

export const SUNDAY_AGENDA: SpeechItem[] = [
  {
    start: '9:00',
    end: '',
    title: 'Registration',
  },
  {
    start: '10:00',
    end: '10:50',
    title: 'Performance analysis and benchmarking on Linux',
    author: 'Krzysztof Biegański, Antmicro',
    lang: ['en'],
    description: [
      'This presentation will provide an overview of the world of performance analysis and benchmarking on Linux, starting with how to correctly assess optimization needs. We’ll also explore open source tools such as perf that let us identify bottlenecks and similar issues, as well as talk about reducing noise in our measurements to ensure accurate and reliable performance assessment.',
    ],
    recording: 'https://www.youtube.com/watch?v=lAQ1U91m9TQ',
  },
  {
    start: '11:00',
    end: '11:50',
    title:
      'Praktycznie wykorzystanie sprzętowych urządzeń uwierzytelniających na przykładzie Yubikey.',
    author: 'Piotr Pyciński',
    lang: ['pl'],
    description: [
      'Postaram się przybliżyć podstawowe możliwości sprzętowych kluczy od Yubico. To nie jest reklama produktu a pokazanie możliwości tych sprytnych urządzeń w codziennej pracy admina. Postaram się pokazać jak przechowywać klucze SSH, podpisywać cyfrowo maile, zabezpieczać pliki czy Keepassa. Jeżeli jesteś posiadaczem takiego klucza, weź ze sobą!',
    ],
    recording: 'https://www.youtube.com/watch?v=uuR5k0rZL_8',
  },
  {
    start: '12:00',
    end: '12:50',
    title: 'Statistical Data Compression',
    author: 'Kamila Szewczyk',
    lang: ['en'],
    description: [
      'A brief dive into the world of data compression and the historical outline of popular data compression tools for Linux. A discussion on the reemergence of statistical data compression with modern tools such as bzip3, designed by the author of the talk.',
    ],
    recording: 'https://www.youtube.com/watch?v=sA96FMu0ypw&t=1719s',
  },
  {
    start: '13:00',
    end: '14:00',
    title: 'Przerwa & Networking',
  },
  {
    start: '14:00',
    end: '14:50',
    title: 'Low cost, silicon based semiconductor manufacturing at home',
    author: 'Patryk Wlazłyń',
    lang: ['en'],
    description: [
      "I'll go through a small lab that I have built with the team for silicon based semiconductor manufacturing powered with open source software, that allowed us to create resistors, diodes, solar cells and NMOS transistors.",
    ],
    recording: 'https://www.youtube.com/watch?v=h7qFgQN04Mw',
  },
  {
    start: '15:00',
    end: '15:50',
    title: 'Thermal Control in the Linux Kernel',
    author: 'Rafał Wysocki',
    lang: ['en'],
    description: [
      "The importance of thermal control has been growing since the outset of computing and it becomes critical as the sizes of systems get ever smaller and they are more and more constrained by their form factors. In contemporary systems, it is often impossible to run all of the components at full capacity at the same time and thermal control scenarios involve constraining performance and distributing power, so as to prevent the system from getting too hot while still allowing the users' expectations to be met. Many of these systems run the Linux kernel and it has to adequately respond to the thermal control challenges, which will be the focus of my talk. I will describe the Linux kernel's thermal control subsystem and explain how it works. I will also talk about the possible directions of its development in the future related to some interesting use cases that need to be addressed.",
    ],
    recording: 'https://www.youtube.com/watch?v=LWfm5k-VIVw',
  },
  {
    start: '16:00',
    end: '16:50',
    title: 'Lightning talks',
    lang: ['en', 'pl'],
    description: [
      'Chciałbyś poruszyć ważny dla Ciebie temat, lub przekazać myśl do społeczności Open Source? Przyjdź i zrób to!',
    ],
    recording:
      'https://www.youtube.com/watch?v=zKi010Oo28E&list=PLTvZBPQxCI8EWxk9lhgOP8wSg7572N5Up&index=14',
  },
];
