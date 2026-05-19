import image1 from '../assets/images/image1.png';
import image9 from '../assets/images/image9.png';
import image10 from '../assets/images/image10.png';
import image12 from '../assets/images/image12.png';
import { JSX } from 'react';

export interface SubProduct {
  name: string;
  material: string;
  specs: string;
  image: string;
}

export interface CategoryDetail {
  title: string;
  description: string;
  mainImage: string;
  subProducts: SubProduct[];
}

export const progressiveDiesData: CategoryDetail = {
  title: 'Progressive Dies',
  description: 'Our progressive dies are engineered for high-speed and high-volume production applications. We focus on exceptional precision and consistency, ensuring that every component meets tight tolerances across millions of cycles to optimize your manufacturing efficiency.',
  mainImage: image1,
  subProducts: [
    {
      name: 'Spline Die Block',
      material: 'HCHCR Premium Hardened Steel',
      specs: 'A high-precision CNC-machined die block featuring an internal spline profile, designed for press tooling, broaching, and precision metal forming applications.',
      image: image1
    },
    {
      name: 'Blanking Die Insert',
      material: 'HCHCR Premium Hardened Steel',
      specs: 'A Blanking Die Insert is a replaceable, high-precision cutting component used in industrial stamping presses to punch flat shapes out of sheet metal.',
      image: image9
    },
    {
      name: 'Precision Dowel Pins',
      material: 'HCHCR Premium Hardened Steel',
      specs: 'High-precision dowel pins engineered for progressive die applications and precision tooling systems. Manufactured with superior CNC machining and hardened steel construction, these pins provide accurate alignment, exceptional wear resistance, and long-lasting performance in demanding industrial environments.',
      image: image10
    },
    {
      name: 'Window Shaving Punch (511)',
      material: 'HCHCR Premium Hardened Steel',
      specs: 'High-precision Window Shaving Punch (511) manufactured from premium SKD11 tool steel with hardness of HRC 58–60 for superior wear resistance and dimensional accuracy.',
      image: image12
    }
  ]
};

export function ProgressiveDies(): JSX.Element {
  return <></>;
}