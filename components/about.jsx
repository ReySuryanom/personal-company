import Image from 'next/image';
import coconutImage from '/public/assets/coconut.webp';

function About() {
  return (
    <section className="p-[105px] flex items-center" id="about">
      <div className="w-1/2 space-y-12">
        <h2 className="text-3xl font-semibold">About Us</h2>
        <h3 className="w-4/5 text-lg">
          We cultivate more than 1,500 hectares of coconut plantations spread
          across several islands in Indonesia. Our company is expanding into
          coconut plantations, to process its derivative products.
        </h3>
        <p className="w-4/5 text-sm leading-7">
          In the beginning, our company was engaged in manufacturing where we
          processed coconut derivative products, namely coconut shells into
          coconut shell charcoal. And after that our company expanded and
          expanded into coconut plantations, to process more derivative
          products.
        </p>
      </div>
      <div className="flex flex-col w-1/2">
        <div className="self-end w-60 h-60 bg-primary rounded-2xl" />
        <div className="self-center w-64 h-64 -my-32 overflow-hidden rounded-2xl">
          <Image
            src={coconutImage}
            alt="coconut"
            className="w-64 h-64 scale-150 -translate-y-20"
            objectFit="contain"
          />
        </div>
        <div className="w-60 h-60 bg-[#F3F3F3] rounded-2xl" />
      </div>
    </section>
  );
}

export default About;
