import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const educations = [
  {
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Universidade Candido Mendes",
    status: "concluído",
  },
  {
    degree: "Engenharia de Software",
    institution: "Universidade Candido Mendes",
    status: "em andamento",
  },
];

const certifications = [
  { name: "Product Management", institution: "PM3" },
  { name: "AI Product Specialist", institution: "PM3" },
  { name: "Product Discovery", institution: "PM3" },
  { name: "Product Growth", institution: "PM3" },
  { name: "Product Leadership", institution: "PM3" },
  { name: "Product Analytics", institution: "PM3" },
  { name: "Product Design", institution: "PM3" },
  { name: "Analista de Dados: da ferramenta à estratégia", institution: "PM3" },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="formacao" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-title text-foreground">
            Formação & <span className="text-gradient">Certificações</span>
          </h2>
          <p className="section-subtitle mx-auto mt-6">
            Aprendizado contínuo e especialização em gestão de produtos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-experience"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">
                Formação Acadêmica
              </h3>
            </div>
            <ul className="space-y-4">
              {educations.map((edu, index) => (
                <motion.li
                  key={edu.degree}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="border-b border-border pb-3 last:border-0 last:pb-0"
                >
                  <p className="text-foreground font-medium">{edu.degree}</p>
                  <p className="text-muted-foreground text-sm">
                    {edu.institution ? `${edu.institution} (${edu.status})` : edu.status}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-experience"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">
                Certificações
              </h3>
            </div>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.li
                  key={cert.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-foreground font-medium">
                    {cert.name}
                  </span>
                  <span className="text-primary text-sm font-medium">
                    {cert.institution}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
