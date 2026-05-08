import SectionReveal from "./SectionReveal";

const experiences = [
  {
    role: "Technical Support Engineer & Plt. Site Manager",
    company: "PT Delameta Bilano",
    period: "2023 — 2024",
    points: [
      "Supported GTO (Automated Toll Gate) systems for JASAMARGA, Hutama Karya, Waskita, PP, and Hutama Marga Waskita, ensuring reliable operations and seamless transaction processing.",
      "Managed and supervised the implementation of automated toll gate projects on-site.",
    ],
  },
  {
    role: "QA Engineer",
    company: "PT Astra Daihatsu Motor",
    period: "2018 — 2020",
    points: [
      "Monitored SOP compliance and supported Continuous Improvement & Zero Defect initiatives.",
      "Prepared daily quality reports and analyzed defect data to improve production performance.",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="section-padding bg-secondary/30">
    <div className="container-custom">
      <SectionReveal>
        <p className="text-primary font-mono text-sm mb-2 tracking-wider">Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Career Journey
        </h2>
      </SectionReveal>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <SectionReveal key={exp.role} delay={i * 0.15}>
              <div className="relative pl-12 md:pl-20">
                {/* Dot */}
                <div className="absolute left-[11px] md:left-[27px] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                
                <div className="glass-card p-6 hover-lift">
                  <span className="text-primary font-mono text-xs tracking-wider">{exp.period}</span>
                  <h3 className="text-foreground font-semibold text-lg mt-1">{exp.role}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
