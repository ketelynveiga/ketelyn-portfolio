import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const education = {
  degree: "Análise e Desenvolvimento de Sistemas",
  level: "Ensino Superior completo",
};

const certifications = [
  { name: "Product Manager", institution: "PM3" },
  { name: "AI Product Specialist", institution: "PM3" },
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
            <div>
              <p className="text-foreground font-medium text-lg mb-1">
                {education.degree}
              </p>
              <p className="text-muted-foreground">{education.level}</p>
            </div>
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
