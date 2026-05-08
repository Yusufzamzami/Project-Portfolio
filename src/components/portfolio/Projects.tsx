import { useState } from "react";
import SectionReveal from "./SectionReveal";
import ProjectCard, { type Project } from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import dealerPerformance from "@/assets/project-dealer-performance.png";
import mytegalInfrahub from "@/assets/project-mytegal-infrahub.png";
import gardenResidence from "@/assets/project-garden-residence.png";

const projects: Project[] = [
  {
    title: "MyTegal InfraHub - Platform Laporan Publik",
    description: "Platform pelaporan infrastruktur publik resmi Pemerintah Kota Tegal untuk warga melaporkan kerusakan jalan, lampu mati, dan masalah infrastruktur lainnya.",
    longDescription: "MyTegal InfraHub adalah platform pelaporan publik yang saya bangun untuk Pemerintah Kota Tegal. Memungkinkan warga melaporkan masalah infrastruktur (jalan rusak, lampu mati, fasilitas umum) dengan mudah melalui peta interaktif. Platform ini sudah menampung 1214+ laporan masuk dengan tingkat penyelesaian 86%, melayani 3 kecamatan dan 4871+ warga aktif. Fitur utama: pembuatan laporan dengan geolocation, peta interaktif, dashboard admin, sistem autentikasi warga, dan dark mode.",
    image: mytegalInfrahub,
    tags: ["React", "TypeScript", "Tailwind", "Maps", "Public Platform"],
    demo: "https://mytegal-infrahub.vercel.app",
  },
  {
    title: "The Garden Residence - Hotel Booking Platform",
    description: "Platform booking hotel mewah dengan pengalaman pemesanan kamar yang elegan, sistem autentikasi tamu, dan tampilan visual premium bertema garden.",
    longDescription: "The Garden Residence adalah platform booking hotel modern yang menghadirkan pengalaman pemesanan kamar mewah secara online. Pengguna dapat menjelajahi pilihan kamar premium, melihat detail fasilitas, dan melakukan reservasi dengan mudah. Fitur utama: 50+ luxury rooms, layanan concierge 24/7, sistem booking interaktif, autentikasi pengguna, dan UI premium dengan tema garden yang menenangkan.",
    image: gardenResidence,
    tags: ["React", "TypeScript", "Tailwind", "Booking System", "Auth"],
    demo: "https://garden-stay-booking.vercel.app",
  },
  {
    title: "Dealer Performance Dashboard",
    description: "Modern Tableau dashboard for monitoring regional sales performance, dealer revenue, and customer insights using interactive business intelligence visualization.",
    longDescription: "Modern Tableau dashboard for monitoring regional sales performance, dealer revenue, and customer insights using interactive business intelligence visualization. Features include sales by region, dealer contribution treemap, revenue per dealer, transmission distribution, and top 10 dealers analysis.",
    image: dealerPerformance,
    tags: ["Tableau", "Analytics", "Dashboard Design"],
    demo: "https://public.tableau.com/app/profile/yusuf.ilham.zamzami/viz/Book1_17750597367040/DBPerformance",
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
