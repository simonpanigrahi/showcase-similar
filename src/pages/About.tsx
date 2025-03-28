
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
            <p className="text-gray-700 mb-6">
              I'm Simon Kenny Panigrahi, a data science enthusiast with a passion for transforming complex data into meaningful insights. With a background in statistics and computer science, I specialize in creating data-driven solutions that help organizations make better decisions.
            </p>
            <p className="text-gray-700 mb-6">
              My journey in data science began during my undergraduate studies, where I discovered my passion for using data to solve real-world problems. Since then, I've been continuously expanding my knowledge and skills in the field.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Data Analysis</h3>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div className="bg-mint h-2 rounded-full w-[95%]"></div>
                </div>
              </div>
              <div>
                <h3 className="font-medium">Machine Learning</h3>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div className="bg-mint h-2 rounded-full w-[90%]"></div>
                </div>
              </div>
              <div>
                <h3 className="font-medium">Data Visualization</h3>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div className="bg-mint h-2 rounded-full w-[85%]"></div>
                </div>
              </div>
              <div>
                <h3 className="font-medium">Python</h3>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div className="bg-mint h-2 rounded-full w-[92%]"></div>
                </div>
              </div>
              <div>
                <h3 className="font-medium">R</h3>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div className="bg-mint h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
