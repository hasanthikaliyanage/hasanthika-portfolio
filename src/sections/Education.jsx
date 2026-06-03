const education = [
  {
    period: "Expected Graduation: 2027",
    degree: "BSc in Information Technology",
    institution: "SIBA Campus, Kandy",
    description:
      "Currently pursuing a Bachelor of Science in Information Technology.",
    current: true,
  },

   {
    period: "Completed in Arts Stream",
    degree: "G.C.E. Advanced Level",
    institution: "Viharamahadevi Girls' College, Kandy",
    description:
      "Successfully completed Advanced Level education in the Arts stream.",
    current: false,
  },

  {
    period: "Completed",
    degree: "G.C.E. Ordinary Level",
    institution: "S.W.R.D. Bandaranayake National School, Kandy",
    description:
      "Successfully completed Ordinary Level education.",
    current: false,
  },

  {
    period: "Completed: 2021",
    degree: "Diploma in Information Technology",
    institution: "SIBA Campus, Kandy",
    description:
      "Completed studies in software development, databases, networking, and IT fundamentals.",
    current: false,
    certificate: "/projects/diploma-it.jpeg",
  },

  {
    period: "Completed: 2018",
    degree: "Diploma in English",
    institution: "SIBA Campus, Kandy",
    description:
      "Enhanced communication, writing, presentation, and professional language skills.",
    current: false,
    certificate: "/projects/diploma-english.jpeg",
  },

  {
    period: "Expected Completion: 2027",
    degree: "Diploma in Chinese Language",
    institution: "SIBA Campus, Kandy",
    description:
      "Studying Chinese language communication and cultural understanding.",
    current: true,
  },

  
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Education
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            My
            <span className="font-serif italic font-normal text-white">
              {" "}
              Academic Journey
            </span>
          </h2>

          <p className="text-muted-foreground">
            My educational background, qualifications, and academic achievements.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {item.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 hover:-translate-y-2 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {item.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">
                      {item.degree}
                    </h3>

                    <p className="text-primary font-medium mt-1">
                      {item.institution}
                    </p>

                    <p className="text-sm text-muted-foreground mt-4">
                      {item.description}
                    </p>

                    {/* Certificate Section */}
                    {item.certificate && (
                      <div className="mt-5">
                        <a
                          href={item.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={item.certificate}
                            alt={`${item.degree} Certificate`}
                            className="w-full h-40 object-cover rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
                          />
                        </a>

                        <a
                          href={item.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-3 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90 transition-all"
                        >
                          View Certificate
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};