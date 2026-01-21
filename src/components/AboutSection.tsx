import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, BarChart3, Workflow, Users } from "lucide-react";

const skills = [
  {
    icon: Database,
    title: "Integrações",
    description: "APIs REST, ERPs, Open Finance",
  },
  {
    icon: BarChart3,
    title: "Dados",
    description: "Métricas, KPIs, Analytics",
  },
  {
    icon: Workflow,
    title: "Automação",
    description: "Processos, Cobranças, Financeiro",
  },
  {
    icon: Users,
    title: "Gestão",
    description: "Produto, Backlog, Stakeholders",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-title text-foreground">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="section-subtitle mx-auto mt-6">
            Profissional apaixonada por transformar ideias em produtos digitais de impacto.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-foreground/80 leading-relaxed text-lg">
              Sou Product Manager com sólida atuação em{" "}
              <span className="highlight-text">produtos financeiros</span>,
              automação de contas a receber, meios de pagamento e integrações
              técnicas. Trabalho em parceria com liderança executiva, engenharia,
              design e stakeholders de negócio para construir produtos escaláveis,
              orientados a dados e impacto mensurável.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Tenho forte experiência em{" "}
              <span className="highlight-text">discovery</span>, priorização
              estratégica, gestão de backlog, métricas de produto e integração com
              ERPs, APIs e soluções financeiras. Atuo com visão sistêmica, foco em
              eficiência operacional e melhoria contínua da experiência do usuário.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="card-experience text-center p-6"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
