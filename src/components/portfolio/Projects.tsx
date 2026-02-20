import { useState } from "react";
import SectionReveal from "./SectionReveal";
import ProjectCard, { type Project } from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const projects: Project[] = [
  {
    title: "Kubernetes Cluster Automation",
    description: "Automated multi-node K8s cluster provisioning with Terraform and Ansible across AWS regions.",
    longDescription: "Built a fully automated Kubernetes cluster provisioning system using Terraform for infrastructure and Ansible for configuration management. Supports multi-region deployment on AWS with automatic scaling, monitoring integration, and disaster recovery capabilities.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    tags: ["Kubernetes", "Terraform", "Ansible", "AWS"],
    github: "#",
    demo: "#",
  },
  {
    title: "CI/CD Pipeline Framework",
    description: "Enterprise-grade CI/CD pipeline with GitLab CI, Docker, and automated testing stages.",
    longDescription: "Designed and implemented a comprehensive CI/CD pipeline framework for microservices architecture. Features include automated testing, security scanning, container building, and blue-green deployments with zero downtime.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
    tags: ["GitLab CI", "Docker", "Python", "Bash"],
    github: "#",
  },
  {
    title: "Infrastructure Monitoring Stack",
    description: "Full observability stack with Prometheus, Grafana, and custom alerting rules.",
    longDescription: "Deployed a comprehensive monitoring and observability platform using Prometheus for metrics collection, Grafana for visualization, and Alertmanager for intelligent alerting. Custom dashboards provide real-time insights into system health and performance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Prometheus", "Grafana", "Docker", "Linux"],
    github: "#",
    demo: "#",
  },
  {
    title: "Cloud Migration Platform",
    description: "Automated cloud migration tool for seamless on-prem to AWS infrastructure transitions.",
    longDescription: "Developed an automated migration platform that streamlines the process of moving on-premise workloads to AWS. Includes assessment tools, dependency mapping, and automated cutover procedures with rollback capabilities.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    tags: ["AWS", "Terraform", "Python", "CloudFormation"],
    github: "#",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <SectionReveal>
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Featured Work
          </h2>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <SectionReveal key={project.title} delay={i * 0.1}>
              <ProjectCard project={project} onSelect={() => setSelected(project)} />
            </SectionReveal>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Projects;
