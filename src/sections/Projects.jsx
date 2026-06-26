import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "University QR Attendance System",
    description:
      "A web-based attendance management system that uses QR codes for automated attendance marking with secure authentication and real-time attendance tracking.",
    image: "/projects/qr-attendance.jpg",
    tags: ["Laravel", "PHP", "MySQL", "JavaScript"],
    link: "#",
    github: "https://github.com/hasanthikaliyanage/qr-attendance-system",
  },

  {
  title: "Personal Portfolio Website",
  description:
    "A modern and responsive personal portfolio website built to showcase my projects, technical skills, education, certifications, and professional experience. Designed with a clean user interface and smooth user experience.",
  image: "/projects/portfolio.jpg",
  tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
  link: "https://hasanthika-portfolio.vercel.app/",
  github: "https://github.com/hasanthikaliyanage/hasanthika-portfolio",
},

{
    title: "Puzzle Hands AI – Computer Vision Puzzle Game",
description:
  "Built an AI-based interactive puzzle game using MediaPipe hand tracking. Users control gameplay using real-time hand gestures captured via webcam, featuring dynamic puzzle generation, timer system, and leaderboard functionality.",
image: "/projects/puzzle-hands-ai.jpg",
tags: ["AI", "Computer Vision", "Next.js", "TypeScript", "MediaPipe"],
link: "https://puzzle-hands-ai.vercel.app/",
github: "https://github.com/hasanthikaliyanage/puzzle-hands-ai",
  },
  {
    title: "Open Mind – Mental Wellness Platform",
    description:
      "A mental wellness platform featuring mood tracking, therapy session booking, podcasts, yoga programs, and an administrative dashboard.",
    image: "/projects/open-mind.jpg",
    tags: ["PHP", "MongoDB", "JavaScript", "Bootstrap"],
    link: "#",
    github: "https://github.com/hasanthikaliyanage/OpenMind-Mental-Wellness-Website",
  },

  {
    title: "AI Chatbot Assistant",
    description:
      "An AI-powered chatbot integrated with Hugging Face models to provide intelligent conversations and automated user assistance.",
    image: "/projects/chatbot.jpg",
    tags: ["Python", "Hugging Face", "AI", "NLP"],
    link: "https://huggingface.co/spaces/Hasanthika/my-tuned-slm-assignment_IT345 ",
    
  },


  {
    title: "Fashion Flow – Inventory Management System",
    description:
      "An inventory management solution with CRUD operations, authentication, database validation, and testing of business workflows.",
    image: "/projects/fashion-flow.jpg",
    tags: ["Java", "Java Swing", "MySQL", "Testing"],
    link: "#",
    github: "https://github.com/hasanthikaliyanage/InventoryMnagementSystem",
  },

  {
    title: "Enterprise Network Design",
    description:
      "Designed and simulated a secure enterprise network using Cisco Packet Tracer with VLANs, routing, DHCP, DNS, and security configurations.",
    image: "/projects/network-design.jpg",
    tags: ["Cisco Packet Tracer", "Networking", "VLAN", "Security"],
    link: "#",
    github: "https://github.com/hasanthikaliyanage/enterprise-network-design",
  },

  {
    title: "Hogwarts Camping Website",
    description:
      "A responsive camping website with interactive pages, image galleries, and modern user interface design.",
    image: "/projects/hogwarts-camping.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://hasanthikaliyanage.github.io/Hogwarts-Camping-Web-Site/",
    github: "https://github.com/hasanthikaliyanage/Hogwarts-Camping-Web-Site",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            My Projects
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Academic &
            <span className="font-serif italic font-normal text-white">
              {" "}
              Personal Projects
            </span>
          </h2>

          <p className="text-muted-foreground">
            A collection of projects showcasing my skills in web development,
            software engineering, networking, databases, and AI technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <AnimatedBorderButton>
            More Projects Coming Soon
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};