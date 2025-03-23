import programmers from '@/assets/logo/4programmers.svg';
import antmicro from '@/assets/logo/antmicro.svg';
import asi from '@/assets/logo/asi-logo-trans.svg';
import clug from '@/assets/logo/clug.png';
import hswro from '@/assets/logo/hswro.svg';
import manus from '@/assets/logo/manus.png';
import mikrus from '@/assets/logo/mikrus.png';
import ovh from '@/assets/logo/ovhcloud.png';
import plug from '@/assets/logo/plug.png';
import programistamag from '@/assets/logo/programistamag.jpg';
import pwr from '@/assets/logo/pwr.png';
import slido from '@/assets/logo/slido.svg';
import type { SponsorshipEntity } from '@/components/sponsorship/types';

export const ORGANIZATIONS = [
  {
    title: 'organizers',
    logos: [{ image: asi, href: 'https://asi.wroclaw.pl/' }],
  },
  {
    title: 'sponsors',
    logos: [
      { image: antmicro, href: 'https://antmicro.com/' },
      { image: ovh, href: 'https://www.ovhcloud.com/pl/' },
    ],
  },
  {
    title: 'partners',
    logos: [
      { image: clug, href: 'https://clug.space/' },
      {
        image: hswro,
        href: 'https://www.hswro.org/',
      },
      { image: plug, href: 'https://linux.org.pl/' },
      { image: pwr, href: 'https://pwr.edu.pl/' },
      { image: programmers, href: 'https://4programmers.net/' },
      {
        image: programistamag,
        href: 'https://programistamag.pl/',
      },
      {
        image: manus,
        href: 'https://manus.pl/',
      },
      {
        image: slido,
        href: 'https://www.slido.com',
      },
      {
        image: mikrus,
        href: 'https://mikr.us',
      },
    ],
  },
] as SponsorshipEntity[];
