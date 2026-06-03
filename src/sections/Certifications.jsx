import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Introduction to Kubernetes (LFS158)",
    issuer: "The Linux Foundation",
    year: "2026",
    image: "/projects/kubernetes.jpg",
  },

  {
    title: "GitHub for Beginners Challenge",
    issuer: "GitHub Education",
    year: "2026",
    image: "/projects/github.jpeg",
  },

  {
    title: "GenAI 101 Badge",
    issuer: "Generative AI & Prompt Engineering",
    year: "2025",
    image: "/projects/genai.jpg",
  },
  {
    title: "Information Technology Certificate Course (Theory)",
    issuer: "Endeavour Institute of Science & Technology",
    year: "2013",
    image: "/projects/it-theory.jpeg",
  },

  {
    title: "Information Technology Certificate Course (Practical)",
    issuer: "Endeavour Institute of Science & Technology",
    year: "2013",
    image: "/projects/it-practical.jpeg",
  },

  {
    title: "Human Resource Management Certificate Course",
    issuer: "IBS Campus",
    year: "2026",
    image: "/projects/hrm.jpeg",
  },

  {
    title: "Business Management & Marketing Certificate Course",
    issuer: "IBS Campus",
    year: "2026",
    image: "/projects/business-marketing.jpeg",
  },

  
];

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-32 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Certifications
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Professional
            <span className="font-serif italic font-normal text-white">
              {" "}
              Certifications
            </span>
          </h2>

          <p className="text-muted-foreground">
            Certifications, badges, and achievements that showcase my
            commitment to continuous learning and professional development.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group glass rounded-3xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-primary text-sm font-medium">
                  {cert.year}
                </span>

                <h3 className="text-lg font-semibold mt-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-muted-foreground mt-2">
                  {cert.issuer}
                </p>

                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-primary hover:text-white transition-colors"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};