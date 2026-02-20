import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import type { Project } from "./ProjectCard";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => (
  <AnimatePresence>
    {project && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="glass-card max-w-2xl w-full max-h-[85vh] overflow-y-auto glow-border"
        >
          {/* Image */}
          <div className="relative h-56 sm:h-72">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/60 backdrop-blur-sm text-foreground hover:bg-background/80 transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.longDescription || project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono px-3 py-1.5 rounded-md bg-secondary text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
                >
                  <Github size={16} /> GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default ProjectModal;
