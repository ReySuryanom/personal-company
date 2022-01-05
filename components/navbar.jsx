import Image from 'next/image';

function Navbar() {
  return (
    <nav className="flex justify-between py-3 items-center">
      <Image
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        width={60}
        height={60}
        alt="brand"
      />
      <ul className="flex justify-between items-start space-x-10 text-white font-bold">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Journey</a>
        </li>
        <li>
          <a href="#">Feature</a>
        </li>
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
