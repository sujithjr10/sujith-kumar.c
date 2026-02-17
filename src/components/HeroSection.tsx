import profileImg from "@/assets/profile.jpg";
import { ArrowDown, Download, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding pt-32 bg-secondary"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left animate-fade-up">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            AI & Machine Learning Engineer
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Hi, I'm{" "}
            <span className="gradient-text">SUJITH KUMAR.C</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
            Building Intelligent Systems with AI & Machine Learning. Passionate about scalable, cloud-based AI solutions that make a real impact.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              View Projects <ArrowDown size={16} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0 animate-fade-up-delay-2">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden ring-4 ring-accent/20 ring-offset-4 ring-offset-background">
            <img
              src={profileImg}
              alt="Sujith Kumar C"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
