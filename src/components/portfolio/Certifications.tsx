import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Award } from "lucide-react";

const certs = [
  { name: "AWS Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
  { name: "Certified Kubernetes Administrator", issuer: "CNCF", year: "2023" },
  { name: "RHCSA", issuer: "Red Hat", year: "2022" },
  { name: "Terraform Associate", issuer: "HashiCorp", year: "2022" },
  { name: "Google Cloud Engineer", issuer: "Google Cloud", year: "2021" },
];

const Certifications = () => (
  <section id="certifications" className="section-padding">
    <div className="container-custom">
      <SectionReveal>
        <p className="text-primary font-mono text-sm mb-2 tracking-wider">Certifications</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Professional Credentials
        </h2>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((cert, i) => (
          <SectionReveal key={cert.name} delay={i * 0.08}>
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="glass-card p-5 flex items-start gap-4 cursor-default"
            >
              <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                <Award size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="text-foreground font-medium text-sm">{cert.name}</h3>
                <p className="text-muted-foreground text-xs mt-1">{cert.issuer} · {cert.year}</p>
              </div>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
