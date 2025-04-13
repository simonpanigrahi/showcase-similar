
import { Link } from "react-router-dom";

const Hero = () => {
  // Ensure image path is correct for GitHub Pages deployment
  const imagePath = `${import.meta.env.BASE_URL}lovable-uploads/cfab0172-1c11-400f-b064-801c661d1161.png`;
  
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
          <span className="block">INTERN</span>
        </h2>
        <p className="text-gray-700 mb-2 max-w-xl">
          B.Tech student specializing in Information Technology.
        </p>
        <p className="text-gray-700 mb-8 max-w-xl">
          Fast learner with excellent analytical skills, dedicated to mastering new technologies and solving complex problems efficiently.
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
          src={imagePath}
          alt="Simon Kenny Panigrahi"
          className="w-full max-w-md md:max-w-lg"
          onError={(e) => {
            console.error("Image failed to load:", e);
            e.currentTarget.onerror = null;
            e.currentTarget.src = `${import.meta.env.BASE_URL}placeholder.svg`;
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
