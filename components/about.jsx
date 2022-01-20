import Image from 'next/image';
import aboutUsImage from '/public/assets/about-us.webp';

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
      </div>
      <div className="flex flex-col w-1/2">
        <div className="self-end w-60 h-60 bg-[#F3F3F3] rounded-2xl" />
        <div className="self-center overflow-hidden -my-44 w-96 h-96 rounded-2xl">
          <Image
            src={aboutUsImage}
            alt="coconut"
            className="w-96 h-96"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div className="w-60 h-60 bg-[#F3F3F3] rounded-2xl" />
      </div>
    </section>
  );
}

export default About;
