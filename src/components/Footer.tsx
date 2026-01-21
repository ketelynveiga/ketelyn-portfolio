import { motion } from "framer-motion";
import { Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <p className="font-display text-xl font-semibold mb-1">
              Kételyn Veiga
            </p>
            <p className="text-background/70 text-sm">Product Manager</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://www.linkedin.com/in/ketelynveiga/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-background/70 hover:text-background transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ketelynmveiga@gmail.com"
              className="p-2 text-background/70 hover:text-background transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-background/70 text-sm flex items-center justify-center md:justify-end gap-1">
              Feito com <Heart size={14} className="text-primary" /> em {currentYear}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
