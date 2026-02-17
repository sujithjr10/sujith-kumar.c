import { GraduationCap, BookOpen } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A motivated AI/ML Engineer with strong foundational knowledge in machine learning and Python.
        </p>

        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
          <p>
            I am a motivated AI & Machine Learning Engineer with a strong foundational knowledge in
            machine learning, deep learning, and Python. Experienced in end-to-end model development
            — from preprocessing and training to evaluation and deployment — I am passionate about
            building scalable, AI-driven solutions that solve real-world problems.
          </p>
          <p>
            My journey in AI started with curiosity about how machines can learn and has grown into a
            deep expertise across computer vision, natural language processing, and cloud-based AI
            deployment using Microsoft Azure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg p-6 card-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <GraduationCap className="text-accent" size={20} />
              </div>
              <h3 className="font-display font-semibold text-foreground">B.Tech — AI & ML</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Panimalar Engineering College
            </p>
            <p className="text-sm font-medium text-foreground mt-1">CGPA: 8.49</p>
          </div>

          <div className="bg-card rounded-lg p-6 card-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <BookOpen className="text-accent" size={20} />
              </div>
              <h3 className="font-display font-semibold text-foreground">Higher Secondary</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Board Examinations
            </p>
            <p className="text-sm font-medium text-foreground mt-1">Percentage: 84%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
