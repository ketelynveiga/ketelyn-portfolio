import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, MapPin, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ketelynmveiga@gmail.com",
    href: "mailto:ketelynmveiga@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/ketelynveiga",
    href: "https://www.linkedin.com/in/ketelynveiga/",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+55 22 99765-7347",
    href: "https://wa.me/5522997657347",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Rio de Janeiro, Brasil",
    href: null,
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="section-padding bg-section-alt" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Vamos conversar?
          </h2>
          <p className="section-subtitle mx-auto">
            Estou sempre aberta a discutir novos projetos, oportunidades ou simplesmente trocar ideias sobre produto.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {contactInfo.map((item, index) => {
            const content = (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">{item.label}</p>
                  <p className="text-primary text-sm">{item.value}</p>
                </div>
              </motion.div>
            );

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "LinkedIn" ? "_blank" : undefined}
                  rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {content}
                </a>
              );
            }

            return content;
          })}
        </div>
      </div>
    </section>
  );
};
