
import Navbar from "@/components/Navbar";
import { Mail, MapPin, Send, Globe } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20">
        <h1 className="text-4xl font-bold mb-8">Get In Touch</h1>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <p className="text-gray-700 mb-8">
              Feel free to reach out to me. I'm always open to discussing new
              projects, opportunities, or partnerships.
            </p>
            <div className="space-y-6">
              <ContactInfoItem
                icon={<Mail />}
                title="Email"
                content="simonkp.acad@gmail.com"
              />
              <ContactInfoItem
                icon={<Globe />}
                title="Website"
                content="www.simonkp.com"
              />
              <ContactInfoItem
                icon={<MapPin />}
                title="Location"
                content="Sonepur, Odisha"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors flex items-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactInfoItem = ({ icon, title, content }: ContactInfoItemProps) => {
  return (
    <div className="flex gap-4">
      <div className="text-mint">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default Contact;
