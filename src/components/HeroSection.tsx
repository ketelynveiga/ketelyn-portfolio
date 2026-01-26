import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/ketelyn-profile.jpg";

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-background flex items-center relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      </div>

      <div className="container-custom relative z-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-8"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20">
                Product Manager
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-[1.1] mb-6"
            >
              Transformando{" "}
              <span className="text-gradient">dados e integrações</span>{" "}
              em produtos financeiros
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              Sou Kételyn Veiga, Product Manager com atuação em produtos digitais B2B e B2C, conectando negócio, tecnologia e dados para criar soluções claras, escaláveis e mensuráveis.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://www.linkedin.com/in/ketelynveiga/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg" className="gap-2">
                  <Linkedin size={18} />
                  LinkedIn
                </Button>
              </a>
              <a href="mailto:ketelynmveiga@gmail.com">
                <Button variant="heroOutline" size="lg" className="gap-2">
                  <Mail size={18} />
                  Email
                </Button>
              </a>
              <a
                href="/Ketelyn_Veiga_Product_Manager.pdf"
                download="Ketelyn_Veiga_Product_Manager.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="heroOutline" size="lg" className="gap-2">
                  <FileText size={18} />
                  Currículo
                </Button>
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-16"
            >
              <button
                onClick={() => scrollToSection("#sobre")}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="text-sm font-medium">Saiba mais</span>
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown size={16} />
                </motion.span>
              </button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-[22rem] md:w-[22rem] md:h-[26rem] lg:w-[26rem] lg:h-[30rem] rounded-xl overflow-hidden">
              <img
                src={profileImage}
                alt="Kételyn Veiga - Product Manager"
                className="w-full h-full object-cover object-[center_15%] grayscale-[10%] contrast-[0.95] brightness-[1.02]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
