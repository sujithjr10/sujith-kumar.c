import { ExternalLink, Eye, Hand, Flame } from "lucide-react";

const projects = [
{
  title: "Real-Time Sign Language Conversion",
  subtitle: "To Text and Speech",
  description:
  "Computer Vision and Deep Learning based system for real-time gesture recognition and speech output.",
  tags: ["Computer Vision", "Deep Learning", "OpenCV", "TensorFlow"],
  icon: Hand,
  github: "#"
},
{
  title: "Calorie Burn Prediction Model",
  subtitle: "Regression-based ML Model",
  description:
  "Built with Scikit-learn and Python to predict calorie burn based on physiological parameters.",
  tags: ["Scikit-learn", "Python", "Regression", "ML"],
  icon: Flame,
  github: "#"
}];


const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Hands-on projects showcasing AI/ML expertise.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) =>
          <div
            key={p.title}
            className="bg-background rounded-lg overflow-hidden card-shadow group hover:scale-[1.02] transition-transform duration-200">

              {/* Icon header */}
              <div className="h-48 bg-primary/5 flex items-center justify-center">
                <p.icon className="text-accent" size={64} strokeWidth={1} />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {p.title}
                </h3>
                <p className="text-sm text-accent font-medium mb-3">{p.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) =>
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">

                      {t}
                    </span>
                )}
                </div>
                <div className="flex gap-3">
                  <a
                  href={p.github}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition-colors">

                    <ExternalLink size={14} /> GitHub
                  </a>
                  <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition-colors">emo

                  <Eye size={14} /> Demo
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default ProjectsSection;