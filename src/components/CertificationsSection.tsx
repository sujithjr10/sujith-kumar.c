import { Award } from "lucide-react";

const certs = [
  {
    title: "Reinforcement Learning",
    issuer: "NPTEL (IIT Madras)",
  },
  {
    title: "Oracle Cloud Infrastructure 2024 — AI Foundations",
    issuer: "Oracle",
  },
  {
    title: "Prompt Engineering",
    issuer: "Udemy",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
          <span className="gradient-text">Certifications</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Professional certifications and achievements.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c) => (
            <div
              key={c.title}
              className="bg-background rounded-lg p-6 card-shadow group hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Award className="text-accent" size={22} />
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm mb-1">{c.title}</h3>
              <p className="text-xs text-muted-foreground">{c.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
