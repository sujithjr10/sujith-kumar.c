import { Code, Database, Brain, Cloud, BarChart3 } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "Java", "SQL"],
  },
  {
    title: "ML Libraries",
    icon: BarChart3,
    skills: ["Pandas", "NumPy", "Scikit-learn"],
  },
  {
    title: "Deep Learning & CV",
    icon: Brain,
    skills: ["TensorFlow", "OpenCV"],
  },
  {
    title: "Models",
    icon: Database,
    skills: ["Deep Learning", "Neural Networks", "LLMs"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["Microsoft Azure AI Services"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Core competencies across the AI/ML technology stack.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-background rounded-lg p-6 card-shadow group hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <cat.icon className="text-accent" size={20} />
                </div>
                <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
