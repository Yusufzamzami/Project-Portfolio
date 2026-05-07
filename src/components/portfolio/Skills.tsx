import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import Tilt3D from "./Tilt3D";
import { 
  Terminal, Container, Cloud, GitBranch, Activity, 
  Network, Code, BarChart3, Layers, Settings, Cpu, FileCode, Atom
} from "lucide-react";

const skills = [
  { name: "Tableau", icon: BarChart3 },
  { name: "React.js", icon: Atom },
  { name: "TypeScript", icon: FileCode },
  { name: "Linux", icon: Terminal },
  { name: "Docker", icon: Container },
  { name: "Kubernetes", icon: Layers },
  { name: "CI/CD", icon: Settings },
  { name: "Git", icon: GitBranch },
  { name: "AWS / GCP", icon: Cloud },
  { name: "Prometheus", icon: Activity },
  { name: "Grafana", icon: BarChart3 },
  { name: "Terraform", icon: Cpu },
  { name: "Bash / Python", icon: Code },
  { name: "Networking", icon: Network },
];

const Skills = () => (
  <section id="skills" className="section-padding bg-secondary/30">
    <div className="container-custom">
      <SectionReveal>
        <p className="text-primary font-mono text-sm mb-2 tracking-wider">Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Technology Stack
        </h2>
      </SectionReveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <SectionReveal key={skill.name} delay={i * 0.05}>
            <Tilt3D intensity={14} className="rounded-xl">
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                style={{ transformStyle: "preserve-3d" }}
                className="glass-card p-5 flex items-center gap-4 cursor-default group"
              >
                <div style={{ transform: "translateZ(30px)" }}>
                  <skill.icon
                    size={22}
                    className="text-primary shrink-0 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span style={{ transform: "translateZ(20px)" }} className="text-foreground text-sm font-medium">
                  {skill.name}
                </span>
              </motion.div>
            </Tilt3D>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
