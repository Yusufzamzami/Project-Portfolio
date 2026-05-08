import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import Tilt3D from "./Tilt3D";
import awsDevOpsCert from "@/assets/cert-aws-devops.png";

const certs = [
  {
    name: "Getting Started with DevOps on AWS",
    issuer: "AWS Training & Certification",
    year: "Feb 2026",
    image: awsDevOpsCert,
  },
];

const Certifications = () => (
  <section id="certifications" className="section-padding">
    <div className="container-custom">
      <SectionReveal>
        <p className="text-primary font-mono text-sm mb-2 tracking-wider">Certifications</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Professional Credentials
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          Verified credentials reflecting hands-on expertise in cloud infrastructure and DevOps practices.
        </p>
      </SectionReveal>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {certs.map((cert, i) => (
          <SectionReveal key={cert.name} delay={i * 0.1}>
            <Tilt3D intensity={10} className="rounded-2xl">
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                className="glass-card p-5 group"
              >
                <div
                  style={{ transform: "translateZ(40px)" }}
                  className="relative overflow-hidden rounded-xl border border-border/60 bg-secondary/30"
                >
                  <motion.img
                    src={cert.image}
                    alt={`${cert.name} certificate`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div style={{ transform: "translateZ(25px)" }} className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-foreground font-semibold text-base leading-snug">{cert.name}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{cert.issuer}</p>
                  </div>
                  <span className="shrink-0 text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {cert.year}
                  </span>
                </div>
              </motion.div>
            </Tilt3D>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
