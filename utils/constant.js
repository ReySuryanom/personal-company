import { FaHandHoldingHeart } from 'react-icons/fa';
import { FaHandsHelping } from 'react-icons/fa';
import { FaRegLightbulb } from 'react-icons/fa';
import { GiRibbonMedal } from 'react-icons/gi';
import brownSugarImage from '/public/assets/brown-sugar.webp';
import coconutSugarImage from '/public/assets/coconat-sugar.webp';
import organicCoconutSugar from '/public/assets/organic-coconat-sugar.webp';
import palmSugarImage from '/public/assets/palm-sugar.webp';
import dennySEImage from '/public/assets/denny-SE.webp';
import desiMelindaSihombingImage from '/public/assets/desi-melinda-sihombing.webp';
import firmanAliImage from '/public/assets/firman-ali.webp';

export const open = (url) => window.open(url, '_blank');

export const keyFeatures = [
  {
    icon: <FaHandHoldingHeart className="mx-auto text-8xl text-primary" />,
    label: 'Integrity',
    desc: 'Integrity means telling the truth, keeping promises, and treating others with fairness and respect. Integrity is one of our most valuable assets. It cannot be compromised.',
  },
  {
    icon: <GiRibbonMedal className="mx-auto text-8xl text-primary" />,
    label: 'Quality',
    desc: 'Quality is demonstrated in many ways by selling and supporting products and services that delight customers, build a work environment, and deliver financial results that meet investor expectations.',
  },
  {
    icon: <FaHandsHelping className="mx-auto text-8xl text-primary" />,
    label: 'Commitment',
    desc: 'Commitment is important as we will continue to provide the best to our customers and investors at all times. Our opportunity to serve should be viewed as a privilege that should not be taken for granted.',
  },
  {
    icon: <FaRegLightbulb className="mx-auto text-8xl text-primary" />,
    label: 'Innovation',
    desc: 'Innovation means creating, designing, developing products and services that have high market attractiveness and strengthen customer preferences for the Sweet Sugar Global project.',
  },
];

export const productList = [
  {
    title: 'Coconut Sugar',
    desc: 'Coconut sugar is made from coconut sap, to make coconut sugar, the coconut sap is filtered first, then brought to a boil. Coconut sugar cannot be replaced by other sugars in the recipe, because it has a unique aroma, minerals, and taste. Coconut sugar also contains vitamin C, potassium, magnesium, calcium, iron, copper and phosphorus. In addition, it has small amounts of phytonutrients, such as flavonoids, polyphenols, and anthocyanins. Coconut sugar is said to be superior to other sweeteners because it is not refined or chemically modified and contains no artificial ingredients.',
    img: coconutSugarImage,
  },
  {
    title: 'Brown Sugar',
    desc: 'Brown sugar or Javanese sugar or what is commonly called sugar air has a shape like a tube and a cylinder. But there are also some that are shaped like coconut shells following the shape of the mold, namely coconut shells. Brown sugar is made from the juice or sap of palm or coconut tree trunks, the sweet taste of brown sugar is more suitable for adding to cakes or other foods. Specifications Ash Content(0.09%), Humidity(0.09%).',
    img: brownSugarImage,
  },
  {
    title: 'Palm Sugar',
    desc: 'This sugar has a dark brown color tends to black. The taste of palm sugar is sweeter and the aroma is stronger than brown sugar or palm sugar. The texture of palm sugar is also thicker than brown sugar which is more liquid. Therefore, palm sugar is preferred to be used as glaze in cakes or traditional ice drinks, such as marrow porridge and ice dawet.',
    img: palmSugarImage,
  },
  {
    title: 'Organic Coconut Sugar',
    desc: 'Organic Coconut Sugar is a powdered version of brown sugar and is often referred to by people as Crystal Sugar. The sap is heated with a stove or firewood at a temperature of 100 – 117 oC until the sap becomes thick or saturated. To produce palm sugar that has been saturated, then pour it into the mold and let it sit for a few minutes so that the sugar becomes hard. when the sap has thickened (saturated) the sap remains in the pan and is left for about 10 minutes, then stirred until a small sugar (ant sugar) is formed. In order for the size of the ant sugar to be uniform, sifting is carried out.',
    img: organicCoconutSugar,
  },
];

export const authorsList = [
  {
    img: desiMelindaSihombingImage,
    name: 'Desi Melinda Sihombing',
    role: 'Founder',
    style: '0 -50px',
    contact: {
      linkedln: () =>
        open('https://www.linkedin.com/in/desi-melinda-sihombing-018921229'),
      instagram: () =>
        open('https://instagram.com/desi_sihombing6?utm_medium=copy_link'),
    },
  },
  {
    img: dennySEImage,
    name: 'Denny SE',
    role: 'Head Marketing',
    style: 'top',
    contact: {
      linkedln: () =>
        open('https://www.linkedin.com/in/danny-setyawan-466a57227'),
    },
  },
  {
    img: firmanAliImage,
    name: 'Firmal Ali',
    role: 'Business Development',
    style: 'top',
    contact: {},
  },
];
