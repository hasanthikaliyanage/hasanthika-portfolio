import {
  User,
  GraduationCap,
  Code2,
  Wrench,
  BookOpen,
  Briefcase,
} from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Get to Know
            <span className="text-primary"> Me</span>
          </h2>

          <p className="text-muted-foreground mt-6 max-w-3xl mx-auto">
            Final-Year BSc Information Technology undergraduate passionate
            about software development, web technologies, and continuous
            learning. Currently seeking internship opportunities to gain
            industry experience and contribute to real-world projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="glass rounded-3xl p-8 glow-border">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">
                Who Am I?
              </h3>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I am Hasanthika Liyanage, a final-year BSc Information
                Technology undergraduate with a strong passion for software
                development, web technologies, and innovation.
              </p>

              <p>
                Throughout my academic journey, I have developed practical
                experience in web development, database management, software
                engineering, and UI/UX design through academic and personal
                projects.
              </p>

              <p>
                I enjoy building responsive and user-friendly applications
                using modern technologies while continuously learning new
                skills to stay updated with industry trends.
              </p>

              <p>
                Currently, I am looking for internship opportunities where
                I can apply my knowledge, gain hands-on experience, and
                contribute to meaningful projects.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid sm:grid-cols-2 gap-6">

            <div className="glass rounded-2xl p-6">
              <GraduationCap className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">
                Final-Year BSc Information Technology Undergraduate
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <Code2 className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Interests</h3>
              <p className="text-sm text-muted-foreground">
                Web Development, Software Engineering, UI/UX Design
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <Wrench className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Technologies</h3>
              <p className="text-sm text-muted-foreground">
                React, JavaScript, PHP, MySQL, Tailwind CSS
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <BookOpen className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Learning</h3>
              <p className="text-sm text-muted-foreground">
                Next.js, Node.js, AI Tools & Cloud Technologies
              </p>
            </div>

            <div className="glass rounded-2xl p-6 sm:col-span-2">
              <Briefcase className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">
                Career Objective
              </h3>
              <p className="text-sm text-muted-foreground">
                Seeking internship opportunities to gain industry experience,
                enhance technical skills, and contribute to innovative
                software solutions.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};