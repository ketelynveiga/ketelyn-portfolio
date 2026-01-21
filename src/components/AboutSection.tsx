import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Search, Users } from "lucide-react";

const skills = [
  {
    icon: Target,
    title: "Produtos de alta confiabilidade",
    description:
      "Construo produtos onde regras de negócio, dados e confiabilidade são centrais para o sucesso da operação financeira.",
  },
  {
    icon: Search,
    title: "Discovery contínuo",
    description:
      "Conduzo processos de discovery e priorização orientada por métricas, evidências e impacto de negócio.",
  },
  {
    icon: Users,
    title: "Alinhamento de stakeholders",
    description:
      "Alinhar stakeholders, times técnicos e liderança com clareza e comunicação assertiva.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding bg-section-alt" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20">
              What I Do
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground italic mb-6"
          >
            O que eu faço
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Trabalho na interseção entre dados, integrações e experiência humana, com foco em decisões baseadas em evidência e impacto concreto.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <skill.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3 font-body">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
