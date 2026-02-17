import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AI Azure Cloud Intern",
    company: "Edunet Foundation",
    duration: "1 Month",
    points: [
      "Deployed ML solutions using Microsoft Azure AI services.",
      "Designed scalable cloud-based ML models.",
      "Collaborated on AI deployment workflows.",
    ],
  },
  {
    role: "AI Python Intern",
    company: "Wee4Tech Solutions",
    duration: "1 Month",
    points: [
      "Developed and optimized ML models using Python and Scikit-learn.",
      "Applied predictive modeling to support data-driven decision-making.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Internship experiences in AI and cloud technologies.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center z-10 relative">
                  <Briefcase className="text-accent" size={20} />
                </div>
                <div className="bg-card rounded-lg p-6 card-shadow flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-display font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-xs font-medium text-accent">{exp.duration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                  <ul className="space-y-1.5">
                    {exp.points.map((p, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
