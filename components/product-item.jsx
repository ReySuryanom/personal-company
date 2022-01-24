import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { open } from '../utils/constant';
import Button from './button';

function ProductItem({ product }) {
  const { title, desc, img } = product;

  return (
    <article className="flex items-center px-8">
      <div className="w-1/2 space-y-7">
        <h2 className="text-5xl font-bold text-primary">Our Product</h2>
        <h3 className="text-2xl font-medium capitalize text-primary">
          {title}
        </h3>
        <p className="w-[87%] leading-7">{desc}</p>
        <Button
          style="ease-in-out duration-300 hover:bg-dark hover:text-white !font-semibold mr-5"
          title="See Details"
          dark
        />
        <Button
          style="ease-in-out duration-300 hover:bg-dark hover:text-white !font-semibold"
          title="Contact Us"
          action={() => open('https://wa.me/6281379629411')}
          dark
        >
          <FaWhatsapp className="ml-2 text-2xl text-title" />
        </Button>
      </div>
      <div className="w-1/2">
        <div className="relative mx-auto overflow-hidden h-96 rounded-3xl w-96">
          <Image
            src={img}
            alt={title}
            className="h-96 w-96"
            objectFit="contain"
            layout="fill"
            blurDataURL="https://via.placeholder.com/150"
            placeholder="blur"
          />
        </div>
      </div>
    </article>
  );
}

export default ProductItem;
