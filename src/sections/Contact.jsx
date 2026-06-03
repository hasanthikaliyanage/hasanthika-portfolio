import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  MessageCircle,
  Send,
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hasanthikaliyanage@gmail.com",
    link: "mailto:hasanthikaliyanage@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+94 75 247 1968",
    link: "tel:+94752471968",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+94 75 247 1968",
    link: "https://wa.me/94752471968",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Kandy, Sri Lanka",
    link: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    link: "https://github.com/hasanthikaliyanage",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/hasanthika-liyanage2000",
  },
  {
    icon: MessageCircle,
    link: "https://wa.me/94752471968",
  },
  {
    icon: Facebook,
    link: "https://facebook.com",
  },
  {
    icon: Instagram,
    link: "https://instagram.com",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Contact form submitted successfully! Connect EmailJS or Web3Forms to receive emails."
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-primary text-sm uppercase tracking-widest">
            Contact Me
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-secondary-foreground">
            Let's Build
            <span className="font-serif italic text-white">
              {" "}Something Amazing
            </span>
          </h2>

          <p className="text-muted-foreground mt-6">
            Currently seeking internship opportunities, collaborations,
            and exciting projects in Software Development,
            Web Development, Networking, and IT Support.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Side */}
          <div className="space-y-6">

            {/* Availability Card */}
            <div className="glass p-6 rounded-3xl border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

                <h3 className="font-semibold text-lg">
                  Available for Internship
                </h3>
              </div>

              <p className="text-muted-foreground text-sm">
                I am actively seeking internship opportunities to
                gain industry experience, contribute to meaningful
                projects, and continue growing as an IT professional.
              </p>
            </div>

            {/* Contact Cards */}
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block glass p-5 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      {item.title}
                    </p>

                    <p className="font-medium">
                      {item.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="glass p-6 rounded-3xl border border-primary/20">
              <h3 className="font-semibold mb-4">
                Connect With Me
              </h3>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-2">

            <div className="glass rounded-3xl p-8 border border-primary/20">

              <h3 className="text-2xl font-semibold mb-8">
                Send Me a Message
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <div className="grid md:grid-cols-2 gap-4">

                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary outline-none"
                  />

                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      subject: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary outline-none"
                />

                <textarea
                  rows="6"
                  placeholder="Your Message..."
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary outline-none resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-primary text-black font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>

              </form>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};