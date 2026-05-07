import SectionReveal from "./SectionReveal";
import Tilt3D from "./Tilt3D";
import { Server, Brain, Workflow, Shield } from "lucide-react";

const highlights = [
  { icon: Server, title: "Infrastructure", desc: "Designing and managing scalable, fault-tolerant systems" },
  { icon: Workflow, title: "Automation", desc: "CI/CD pipelines, IaC, and workflow orchestration" },
  { icon: Brain, title: "Problem Solving", desc: "Analytical approach to complex system challenges" },
  { icon: Shield, title: "Security", desc: "Implementing security best practices across the stack" },
];

const About = () => (
  <section id="about" className="section-padding">
    <div className="container-custom">
      <SectionReveal>
        <p className="text-primary font-mono text-sm mb-2 tracking-wider">About Me</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Engineering Reliable Systems
        </h2>
        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-12">
          A passionate DevOps Engineer and Linux System Administrator with deep expertise in 
          cloud infrastructure, containerization, and automation. I thrive on building systems 
          that are resilient, scalable, and maintainable — turning complex infrastructure 
          challenges into elegant, automated solutions.
        </p>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, i) => (
          <SectionReveal key={item.title} delay={i * 0.1}>
            <Tilt3D intensity={10} className="rounded-xl h-full">
              <div style={{ transformStyle: "preserve-3d" }} className="glass-card p-6 hover-lift group h-full">
                <div style={{ transform: "translateZ(40px)" }}>
                  <item.icon size={24} className="text-primary mb-4 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300" />
                </div>
                <h3 style={{ transform: "translateZ(25px)" }} className="text-foreground font-semibold mb-2">{item.title}</h3>
                <p style={{ transform: "translateZ(15px)" }} className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </Tilt3D>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default About;
