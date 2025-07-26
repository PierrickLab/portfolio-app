import { ArrowUp } from "lucide-react";
import {
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Pierrick Labrot. All rights reserved.
      </p>
      <div className="absolute left-1/2 -translate-x-1/2 flex space-x-4">
                <a href="https://www.linkedin.com/in/pierrick-labrot-9106571b1/" target="_blank"
                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/labrotpierrick" target="_blank"
                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                  <Instagram />
                </a>
                <a href="https://github.com/PierrickLab" target="_blank"
                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                  <Github />
                </a>
      </div>
      <a
        href="#home"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>

    </footer>
  );
};
