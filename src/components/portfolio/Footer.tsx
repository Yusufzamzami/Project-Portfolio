const Footer = () => (
  <footer className="py-8 border-t border-border/30">
    <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
      <p className="text-muted-foreground text-xs font-mono">
        Built with precision & passion
      </p>
    </div>
  </footer>
);

export default Footer;
