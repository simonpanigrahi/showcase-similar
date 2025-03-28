
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-10 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
      <div className="flex-1">
        <p className="text-gray-700 text-lg mb-2">Hello, I'm</p>
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
          SIMON KENNY
          <span className="block text-mint">PANIGRAHI</span>
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-6">
          DATA SCIENCE
          <span className="block">ENTHUSIAST</span>
        </h2>
        <p className="text-gray-700 mb-2 max-w-xl">
          Transforming complex data into actionable insights.
        </p>
        <p className="text-gray-700 mb-8 max-w-xl">
          Passionate about machine learning, data visualization, and
          developing innovative data-driven solutions.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/about"
            className="px-6 py-3 rounded-full bg-mint text-white hover:bg-opacity-90 transition-colors"
          >
            About Me
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
          >
            Let's Connect
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src="/lovable-uploads/916f759e-f495-4909-ba71-733a4371e9e1.png"
          alt="Simon Kenny Panigrahi"
          className="w-full max-w-md md:max-w-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
