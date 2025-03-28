
import Navbar from "@/components/Navbar";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-20">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">My Resume</h1>
          <a
            href="#"
            className="px-4 py-2 rounded-full bg-mint text-white flex items-center gap-2 hover:bg-opacity-90 transition-colors"
          >
            <Download size={16} />
            Download PDF
          </a>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
            Education
          </h2>
          <div className="space-y-6">
            <ResumeItem
              title="B. Tech in Information Technology"
              organization="Veer Surendra Sai University of Technology"
              duration="2022 - 2026"
              description="Currently pursuing a Bachelor's degree in Information Technology."
            />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
            Work Experience
          </h2>
          <div className="space-y-6">
            <ResumeItem
              title="CV Software Intern"
              organization="Logiclens"
              duration="03/2024 - 05/2024"
              description="Worked on Human Recognition from CCTV Footage and navigating their path in certain area using Yolo8, OpenCV and Sort. Contributed in building GUI for the software using Ctk, Streamlit etc."
            />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">Technical Skills</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Python</li>
                <li>SQL</li>
                <li>Power BI</li>
                <li>Microsoft Excel</li>
                <li>Google Cloud Platform(GCP)/AWS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Other Skills</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>UI/UX</li>
                <li>HTML-CSS-JS</li>
                <li>YOLO and Computer Vision</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
            Certifications
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Basic of Python - Infosys</h3>
              <p className="text-gray-700">Learned basic Python programming and fundamentals.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Career Essentials in Data Analytics - Microsoft and LinkedIn</h3>
              <p className="text-gray-700">Acquired knowledge Power BI, Microsoft Excel and SQL. Foundational skills for Analysts.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Cloud Computing Fundamentals - Google</h3>
              <p className="text-gray-700">Learned about Components in GCP Dashboard and use cases of it.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Digital Marketing - Google</h3>
              <p className="text-gray-700">Explored the tools and techniques of digital marketing, SEO and AdSense.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Self-Guided Learning with ChatGPT - Udemy</h3>
              <p className="text-gray-700">Understood the use of AI as a tool in enhances productivity in Work Environment.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
            Projects
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Customer Feedback Analysis using NLP (working)</h3>
              <p className="text-gray-700">Using nltk, seaborn, tensorflow like python libraries to generate insights from customer review dataset.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Delhivery Logistics Performance Dashboard</h3>
              <p className="text-gray-700">Performed Data Cleaning and formatting using Power Query. Presented insights using Power BI.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">E-Commerce Website</h3>
              <p className="text-gray-700">Created a website using HTML, CSS, Javascript. Deployed in the Internet.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

interface ResumeItemProps {
  title: string;
  organization: string;
  duration: string;
  description: string;
}

const ResumeItem = ({ title, organization, duration, description }: ResumeItemProps) => {
  return (
    <div>
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-xl font-medium text-gray-900">{title}</h3>
        <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
          {duration}
        </span>
      </div>
      <p className="text-gray-800 font-medium mb-1">{organization}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Resume;
