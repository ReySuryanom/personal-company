import Button from './button';
import Navbar from './navbar';

function Hero() {
  return (
    <div className="flex flex-col min-h-screen justify-center text-white">
      <Navbar />
      <div className="my-auto">
        <p className="font-semibold text-2xl">Supplying across the globe</p>
        <h1 className="font-medium text-5xl w-[49%] mt-3 leading-tight">
          The Leading Supplier of Coconut Product
        </h1>
        <Button style="mt-20" title="Learn More" />
      </div>
    </div>
  );
}

export default Hero;
