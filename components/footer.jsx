import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-primary px-[105px] py-28 text-white" id="contact">
        <h2 className="mb-1 text-5xl font-bold text-center">Questions?</h2>
        <p className="text-center mb-14">Let’s Get In Touch</p>
        <div className="space-y-7">
          <a href="#header" className="text-4xl font-bold leading-6 text-white">
            Sugarsweet<span className="block">Coco</span>
          </a>
          <h3 className="text-2xl font-bold">Coconut Sugar CV. Bintara</h3>
          <p className="w-[38%] text-lg leading-7">
            We also continue to update the information about the company through
            social media, for the latest information you can follow our social
            media.
          </p>
          <div className="flex items-center space-x-3.5 text-xl">
            <FaWhatsapp
              className="cursor-pointer"
              onClick={() => open('https://wa.me/6281379629411')}
            />
            <FaInstagram
              className="cursor-pointer"
              onClick={() =>
                open(
                  'https://instagram.com/sugarsweetcoco6?utm_medium=copy_link'
                )
              }
            />
          </div>
        </div>
      </footer>
      <p className="bg-[#282828] px-[105px] py-4 align-middle text-white font-semibold text-center">
        &copy; {currentYear} Sugarsweet Coco. All rights reserved
      </p>
    </>
  );
}

export default Footer;
