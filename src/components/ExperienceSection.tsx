import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Kolek",
    role: "Product Manager",
    description:
      "A Kolek é uma plataforma de automação de Contas a Receber que integra dados financeiros de ERPs, planilhas e bancos via Open Finance, centralizando e automatizando a gestão de cobranças. Clientes alcançam até 40% de redução da inadimplência.",
    context:
      "Atuação como Product Manager com foco em dados, integrações e soluções financeiras, trabalhando diretamente com CPTO e CEO na evolução estratégica do produto.",
    achievements: [
      "Definição e priorização de roadmap orientado a impacto de negócio e métricas",
      "Liderança de integrações via API com ERPs como Omie e Conta Azul",
      "Automação de cobranças, conciliações e controles financeiros",
      "Monitoramento de KPIs, qualidade e ingestão de dados para tomada de decisão",
      "Coordenação de times multidisciplinares (engenharia, design e negócio)",
      "Estruturação de documentação, critérios de aceitação e testes de hipóteses",
      "Aplicação de inteligência artificial em discovery, análise de feedbacks e exploração de soluções",
    ],
  },
  {
    company: "Stoom",
    role: "Product Owner",
    description:
      "Atuação como Product Owner em produtos financeiros B2C e B2B, com foco em meios de pagamento, integrações técnicas e jornadas críticas de negócio.",
    achievements: [
      "Gestão de produtos de pagamento: cartão de crédito, boleto, vale alimentação e crédito B2B",
      "Atuação em regras de negócio, restrições e compliance para grandes clientes",
      "Condução de discovery, levantamento e validação de requisitos funcionais e não funcionais",
      "Mapeamento de jornadas e processos end-to-end",
      "Acompanhamento de integrações técnicas via APIs REST e SOAP",
      "Escrita de histórias de usuário, critérios de aceitação e documentação técnica",
      "Participação ativa em rituais ágeis e acompanhamento do ciclo completo das entregas",
      "Comunicação contínua com times multidisciplinares para garantir alinhamento e qualidade",
    ],
  },
  {
    company: "Omie",
    role: "Analista de Negócios",
    description:
      "Atuação em produto digital B2B, conectando negócio, produto e tecnologia na evolução de sistemas críticos.",
    achievements: [
      "Levantamento e análise de necessidades de negócio e clientes",
      "Priorização de demandas com foco em impacto e valor",
      "Documentação de requisitos funcionais e não funcionais",
      "Atuação como ponto focal entre clientes e times técnicos",
      "Uso de SQL para análise de dados, validação de hipóteses e investigação de incidentes",
      "Sustentação e evolução de sistemas CRM integrados",
      "Apoio a testes, homologações e definição de critérios de aceitação",
      "Documentação e padronização de processos no Confluence e Jira",
      "Participação em times ágeis com metodologia Scrum",
    ],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experiencia"
      className="section-padding bg-section-alt"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-title text-foreground">
            Experiência <span className="text-gradient">Profissional</span>
          </h2>
          <p className="section-subtitle mx-auto mt-6">
            Trajetória focada em produtos digitais, dados e soluções financeiras.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="card-experience"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                    {exp.company}
                  </h3>
                  <p className="text-primary font-medium">{exp.role}</p>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-4">
                {exp.description}
              </p>

              {exp.context && (
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  {exp.context}
                </p>
              )}

              <div>
                <h4 className="font-semibold text-foreground mb-4">
                  Principais responsabilidades e conquistas:
                </h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-foreground/80"
                    >
                      <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
