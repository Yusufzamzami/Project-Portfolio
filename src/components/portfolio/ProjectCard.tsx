import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  longDescription?: string;
}

interface ProjectCardProps {
  project: Project;
  onSelect: () => void;
}

const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Stronger 3D tilt
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [14, -14]), { stiffness: 250, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-14, 14]), { stiffness: 250, damping: 22 });

  // Parallax depth for inner layers
  const imgX = useSpring(useTransform(mouseX, [-150, 150], [-12, 12]), { stiffness: 200, damping: 20 });
  const imgY = useSpring(useTransform(mouseY, [-150, 150], [-12, 12]), { stiffness: 200, damping: 20 });
  const contentX = useSpring(useTransform(mouseX, [-150, 150], [-6, 6]), { stiffness: 200, damping: 20 });
  const contentY = useSpring(useTransform(mouseY, [-150, 150], [-6, 6]), { stiffness: 200, damping: 20 });

  // Glare position
  const glareX = useTransform(mouseX, [-150, 150], [0, 100]);
  const glareY = useTransform(mouseY, [-150, 150], [0, 100]);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      onClick={onSelect}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="glass-card overflow-hidden cursor-pointer group relative shadow-[0_10px_40px_-12px_hsl(0_0%_0%_/_0.25)] hover:shadow-[0_30px_60px_-15px_hsl(160_45%_30%_/_0.35)] transition-shadow duration-500"
    >
      {/* Glare / shine */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${glareX}% ${glareY}%, hsl(0 0% 100% / 0.35), transparent 50%)`,
        }}
      />

      {/* Image with parallax */}
      <div className="relative h-48 overflow-hidden" style={{ transformStyle: "preserve-3d" }}>
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          style={{ x: imgX, y: imgY, scale: 1.08, translateZ: 40 }}
          animate={{ filter: hovered ? "brightness(1.1)" : "brightness(1)" }}
          transition={{ duration: 0.4 }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </div>

      {/* Content with subtle depth */}
      <motion.div
        className="p-6 relative z-10"
        style={{ x: contentX, y: contentY, translateZ: 30 }}
      >
        <h3 className="text-foreground font-semibold text-lg mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="text-xs font-mono px-2 py-1 rounded-md bg-secondary text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub repository"
            >
              <Github size={18} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
