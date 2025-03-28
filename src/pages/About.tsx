
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
              I am a third-year B.Tech student specializing in Information Technology with a strong foundation in computer applications and programming.
            </p>
            <p className="text-gray-700 mb-6">
              I am a fast learner with excellent analytical skills, dedicated to mastering new technologies and solving complex problems efficiently.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">English</h4>
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                    <div className="bg-mint h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Hindi</h4>
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                    <div className="bg-mint h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Odia</h4>
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                    <div className="bg-mint h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Hobbies</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Travelling</li>
                <li>Stock Market</li>
                <li>Cycling</li>
                <li>Cooking</li>
                <li>Stand-up Comedy</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Python</h3>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div className="bg-mint h-2 rounded-full w-[90%]"></div>
                </div>
              </div>
              <div>
                <h3 className="font-medium">SQL</h3>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div className="bg-mint h-2 rounded-full w-[85%]"></div>
                </div>
              </div>
              <div>
                <h3 className="font-medium">Power BI</h3>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div className="bg-mint h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
              <div>
                <h3 className="font-medium">Microsoft Excel</h3>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div className="bg-mint h-2 rounded-full w-[85%]"></div>
                </div>
              </div>
              <div>
                <h3 className="font-medium">Google Cloud Platform/AWS</h3>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div className="bg-mint h-2 rounded-full w-[75%]"></div>
                </div>
              </div>
              <div>
                <h3 className="font-medium">UI/UX</h3>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div className="bg-mint h-2 rounded-full w-[70%]"></div>
                </div>
              </div>
              <div>
                <h3 className="font-medium">HTML-CSS-JS</h3>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div className="bg-mint h-2 rounded-full w-[75%]"></div>
                </div>
              </div>
              <div>
                <h3 className="font-medium">YOLO and Computer Vision</h3>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div className="bg-mint h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="mb-4">
                <h4 className="font-medium text-lg">B. Tech in Information Technology</h4>
                <p className="text-gray-700">Veer Surendra Sai University of Technology</p>
                <p className="text-gray-600">2022-2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
