import Image from 'next/image';
import { useEffect, useState } from 'react';

function Navbar() {
  const [scrollDir, setScrollDir] = useState('DOWN');
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
  console.log(top);

  return (
    <nav
      className={`${
        !isScrollingUp ? 'hidden' : 'bg-white text-dark border-dark border-b-2'
      } ${
        top && '!bg-transparent duration-300 ease-in-out !text-white !border-0'
      } fixed top-0 left-0 flex items-center justify-between w-full py-3 px-[105px] z-10`}
    >
      <Image
        src="data:image/png;base64,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"
        width={112}
        className="mr-auto"
        height={45}
        alt="brand"
      />
      <ul className="flex items-start justify-between space-x-10 font-bold ">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#journey">Journey</a>
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
