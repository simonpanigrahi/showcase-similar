
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
              title="Master of Science in Data Science"
              organization="Stanford University"
              duration="2019 - 2021"
              description="Specialized in machine learning and statistical modeling. Thesis on predictive analytics for healthcare outcomes."
            />
            <ResumeItem
              title="Bachelor of Science in Computer Science"
              organization="University of California, Berkeley"
              duration="2015 - 2019"
              description="Focus on algorithms and data structures. Minor in Statistics."
            />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
            Work Experience
          </h2>
          <div className="space-y-6">
            <ResumeItem
              title="Data Scientist"
              organization="Tech Innovations Inc."
              duration="2021 - Present"
              description="Lead data scientist for customer analytics projects. Developed predictive models that increased conversion rates by 18%."
            />
            <ResumeItem
              title="Data Science Intern"
              organization="Global Analytics Corp."
              duration="Summer 2020"
              description="Assisted in developing machine learning models for fraud detection. Improved model accuracy by 12%."
            />
            <ResumeItem
              title="Research Assistant"
              organization="Stanford AI Lab"
              duration="2019 - 2021"
              description="Conducted research on natural language processing techniques for medical text analysis."
            />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">Programming Languages</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Python (Pandas, NumPy, Scikit-learn)</li>
                <li>R (ggplot2, dplyr, caret)</li>
                <li>SQL</li>
                <li>Java</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Data Science & ML</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Machine Learning</li>
                <li>Statistical Analysis</li>
                <li>Data Visualization</li>
                <li>Natural Language Processing</li>
                <li>Deep Learning (TensorFlow, PyTorch)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
            Certifications
          </h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>AWS Certified Machine Learning – Specialty</li>
            <li>Google Professional Data Engineer</li>
            <li>IBM Data Science Professional Certificate</li>
          </ul>
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
