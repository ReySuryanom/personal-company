import Image from 'next/image';
import { useEffect, useState } from 'react';

function Navbar() {
  const [scrollDir, setScrollDir] = useState('UP');
  const [top, setTop] = useState(true);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? 'DOWN' : 'UP');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  useEffect(() => {
    window.onscroll = () => setTop(window.pageYOffset === 0);

    return () => (window.onscroll = null);
  }, []);

  const isScrollingUp = scrollDir === 'UP';

  return (
    <nav
      className={`${
        !isScrollingUp ? 'hidden' : 'bg-white text-dark border-dark border-b-2'
      } ${
        top && '!bg-transparent !text-primary !border-0'
      } fixed top-0 left-0 flex duration-500 ease-in-out items-center justify-between w-full py-3 px-[105px] z-10`}
    >
      <a href="#header" className={`text-2xl font-bold leading-6 text-primary`}>
        Sugarsweet<span className="block">Coco</span>
      </a>
      <ul className="flex items-start justify-between space-x-10 font-bold ">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#feature">Feature</a>
        </li>
        <li>
          <a href="#product">Product</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
