const workshops = [
  {
    title: "Create an Agent with Copilot Studio",
    year: "2025",
    image: "/projects/copilot.jpeg",
  },
  {
    title: "Creating an MCP Server Using .NET",
    year: "2025",
    image: "/projects/mcp-server.jpeg",
  },
  {
    title: "UI/UX Designing Workshop",
    year: "2025",
    image: "/projects/uiux.jpeg",
  },
  {
    title: "API & GenAI Tour 2025",
    year: "2025",
    image: "/projects/genai-tour.jpg",
  },
  {
    title: "Beauty of Cloud 2.0 – Getting into the Cloud with AWS",
    year: "2026",
    image: "/projects/aws-cloud.png",
  },
  {
    title: "Developer Summit '26 | Cloud Builder Badge",
    year: "2026",
    image: "/projects/cloud-builder-badge.png",
  },
];

export const Workshops = () => {
  return (
    <section
      id="workshops"
      className="py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Workshops & Training
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Events,
            <span className="font-serif italic font-normal text-white">
              {" "}
              Workshops & Certificates
            </span>
          </h2>

          <p className="text-muted-foreground">
            A collection of workshops, training programs,
            participation certificates, and industry events
            that contributed to my professional growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((item, index) => (
            <a
              key={index}
              href={item.image}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group h-full glass rounded-3xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-primary text-sm font-medium">
                    {item.year}
                  </span>

                  <h3 className="font-semibold text-lg mt-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mt-3">
                    Click to view certificate
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};