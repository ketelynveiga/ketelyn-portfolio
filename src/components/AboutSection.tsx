import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Search, Users, Lightbulb, BarChart3, Puzzle } from "lucide-react";

const skills = [
  {
    icon: Rocket,
    title: "Delivery e execução",
    description:
      "Conduzo squads multidisciplinares, organizo e priorizo backlog, escrevo histórias de usuário e critérios de aceitação e garanto previsibilidade nas entregas por meio de ritos ágeis e acompanhamento contínuo de métricas.",
  },
  {
    icon: Search,
    title: "Discovery orientado a dados",
    description:
      "Estruturo processos de discovery com entrevistas, análise quantitativa, experimentos e testes A/B para validar hipóteses e priorizar iniciativas com maior impacto em negócio e experiência do cliente.",
  },
  {
    icon: Users,
    title: "Alinhamento estratégico",
    description:
      "Conecto stakeholders e engenharia para definir prioridades e roadmap, traduzindo objetivos estratégicos em decisões de produto orientadas por dados, escopo claro e impacto.",
  },
];

const tools = [
  "Figma",
  "Jira",
  "Miro",
  "Notion",
  "Google Workspace",
  "SQL",
  "Postman",
  "Swagger",
  "IAs",
];

const competencies = [
  "Product Discovery",
  "Priorização",
  "Roadmap",
  "Gestão de backlog",
  "OKRs",
  "Métricas",
  "Testes A/B",
  "Análise de dados",
  "Prototipagem",
  "No-code",
];

const expectations = [
  {
    icon: Lightbulb,
    title: "Trade-offs honestos",
    description:
      "Comunicação objetiva sobre riscos, impactos e possibilidades, apoiando decisões conscientes.",
  },
  {
    icon: BarChart3,
    title: "PRDs claros e objetivos",
    description:
      "Documentação objetiva que guia times, alinha expectativas e orienta a execução.",
  },
  {
    icon: Puzzle,
    title: "Visão sistêmica",
    description:
      "Entendimento do produto a partir dos objetivos do negócio, com decisões orientadas a impacto e sustentabilidade.",
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
            className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-6"
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
            Atuo como Product Manager liderando discovery e delivery de produtos digitais, com foco em decisões orientadas por dados, priorização estratégica e execução consistente para gerar impacto real no negócio.
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

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20">
              What I Use
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-10"
          >
            Ferramentas do dia a dia
          </motion.h3>

          {/* Tools Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.05, duration: 0.3 }}
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-card text-foreground font-medium text-sm border border-border shadow-soft hover:shadow-hover transition-all duration-300"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Competencies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20">
              Skills
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-10"
          >
            Competências em Produto
          </motion.h3>

          {/* Competencies Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {competencies.map((competency, index) => (
              <motion.span
                key={competency}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.1 + index * 0.05, duration: 0.3 }}
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-card text-foreground font-medium text-sm border border-border shadow-soft hover:shadow-hover transition-all duration-300"
              >
                {competency}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* What to Expect Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-24"
        >
          {/* Header */}
          <div className="text-center mb-16">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20">
                What You Can Expect
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground"
            >
              O que esperar de mim
            </motion.h3>
          </div>

          {/* Expectations Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {expectations.map((item, index) => (
              <motion.div
                key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              className="text-center"
            >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h4 className="text-xl font-semibold text-foreground mb-3 font-body">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
