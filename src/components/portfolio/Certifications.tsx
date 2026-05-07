import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import Tilt3D from "./Tilt3D";

const certs = [
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    logo: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "CNCF",
    year: "2023",
    logo: "https://images.credly.com/size/340x340/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png",
  },
  {
    name: "RHCSA",
    issuer: "Red Hat",
    year: "2022",
    logo: "https://images.credly.com/size/340x340/images/572de0ba-2c59-4816-a59d-b7571f6523e1/image.png",
  },
  {
    name: "Terraform Associate",
    issuer: "HashiCorp",
    year: "2022",
    logo: "https://images.credly.com/size/340x340/images/99289602-861e-4929-8277-773e63a2fa6f/image.png",
  },
  {
    name: "Google Cloud Engineer",
    issuer: "Google Cloud",
    year: "2021",
    logo: "https://images.credly.com/size/340x340/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png",
  },
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
            <Tilt3D intensity={12} className="rounded-xl">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                style={{ transformStyle: "preserve-3d" }}
                className="glass-card p-5 flex items-center gap-4 cursor-default"
              >
                <div
                  style={{ transform: "translateZ(40px)" }}
                  className="w-12 h-12 rounded-lg bg-secondary/50 shrink-0 overflow-hidden flex items-center justify-center p-1.5"
                >
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div style={{ transform: "translateZ(20px)" }}>
                  <h3 className="text-foreground font-medium text-sm">{cert.name}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{cert.issuer} · {cert.year}</p>
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
