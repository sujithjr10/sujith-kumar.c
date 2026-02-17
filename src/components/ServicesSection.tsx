import { Brain, BarChart3, Eye, Cloud, Zap } from "lucide-react";

const services = [
  { title: "Machine Learning Model Development", icon: Brain },
  { title: "Predictive Analytics Solutions", icon: BarChart3 },
  { title: "Computer Vision Applications", icon: Eye },
  { title: "Cloud-Based AI Deployment (Azure)", icon: Cloud },
  { title: "AI Model Optimization", icon: Zap },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
          My <span className="gradient-text">Services</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional AI/ML services tailored to your needs.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-lg p-6 card-shadow text-center group hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <s.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm">{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
