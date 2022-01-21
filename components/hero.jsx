import Button from './button';

function Hero() {
  return (
    <div
      className="flex flex-col justify-center min-h-screen text-white"
      id="header"
    >
      <div className="my-auto">
        <p className="text-2xl font-semibold text-primary">
          Supplying across the globe
        </p>
        <h1 className="font-medium text-5xl w-[49%] mt-3 leading-tight text-primary">
          The Leading Supplier of Coconut Product
        </h1>
        <Button
          style="mt-20 ease-in-out duration-300 hover:text-white hover:bg-primary"
          title="Learn More"
        />
      </div>
    </div>
  );
}

export default Hero;
