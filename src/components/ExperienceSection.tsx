import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, ChevronDown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experiences = [
  {
    company: "KOLEK",
    role: "Product Manager",
    shortDescription:
      "automação de contas a receber, integrações com ERPs e Open Finance",
    tabs: {
      contexto: {
        title: "Problema de negócio",
        content:
          "A gestão de contas a receber em PMEs envolve processos manuais, dados fragmentados entre ERPs, planilhas e bancos, gerando ineficiência, erros e aumento da inadimplência.",
        users: [
          "Gestores financeiros de PMEs",
          "Times de cobrança e operações",
          "Áreas de controladoria e planejamento",
        ],
      },
      papel: {
        title: "Meu papel",
        items: [
          "Definição e priorização de roadmap orientado a impacto de negócio e métricas",
          "Liderança de integrações via API com ERPs como Omie e Conta Azul",
          "Trabalho direto com CPTO e CEO na evolução estratégica do produto",
          "Coordenação de times multidisciplinares (engenharia, design e negócio)",
        ],
      },
      processo: {
        title: "Processo",
        items: [
          "Discovery contínuo com entrevistas e análise de dados",
          "Priorização por impacto e esforço técnico",
          "Documentação clara com PRDs e critérios de aceitação",
          "Acompanhamento de métricas e iteração rápida",
        ],
      },
      entregaveis: {
        title: "Entregáveis",
        items: [
          "Integrações com ERPs (Omie, Conta Azul)",
          "Automação de cobranças e conciliações",
          "Dashboards de monitoramento de KPIs",
          "Documentação técnica e de produto",
        ],
      },
      resultados: {
        title: "Resultados",
        items: [
          "Até 40% de redução da inadimplência para clientes",
          "Aumento da qualidade e confiabilidade dos dados",
          "Redução do tempo de onboarding de novos clientes",
          "Maior visibilidade e controle financeiro para gestores",
        ],
      },
    },
  },
  {
    company: "STOOM",
    role: "Product Owner",
    shortDescription:
      "produtos financeiros B2B e B2C, meios de pagamento e integrações técnicas",
    tabs: {
      contexto: {
        title: "Problema de negócio",
        content:
          "Clientes B2B e B2C precisavam de soluções de pagamento robustas, com suporte a múltiplos métodos e integração com sistemas legados, garantindo compliance e experiência fluida.",
        users: [
          "Clientes finais realizando pagamentos",
          "Times de operação e atendimento",
          "Áreas de compliance e negócio",
        ],
      },
      papel: {
        title: "Meu papel",
        items: [
          "Gestão de produtos de pagamento: cartão, boleto, vale alimentação e crédito B2B",
          "Atuação em regras de negócio, restrições e compliance para grandes clientes",
          "Condução de discovery e validação de requisitos funcionais e não funcionais",
          "Comunicação contínua com times multidisciplinares",
        ],
      },
      processo: {
        title: "Processo",
        items: [
          "Mapeamento de jornadas e processos end-to-end",
          "Escrita de histórias de usuário e critérios de aceitação",
          "Acompanhamento de integrações técnicas via APIs REST e SOAP",
          "Participação ativa em rituais ágeis",
        ],
      },
      entregaveis: {
        title: "Entregáveis",
        items: [
          "Documentação técnica e de produto",
          "Integrações com gateways de pagamento",
          "Fluxos de pagamento otimizados",
          "Histórias de usuário e especificações",
        ],
      },
      resultados: {
        title: "Resultados",
        items: [
          "Aumento da conversão em jornadas de pagamento",
          "Redução de erros em integrações",
          "Maior satisfação de clientes enterprise",
          "Alinhamento e qualidade nas entregas",
        ],
      },
    },
  },
  {
    company: "OMIE",
    role: "Analista de Negócios",
    shortDescription:
      "produto digital B2B, conectando negócio, produto e tecnologia",
    tabs: {
      contexto: {
        title: "Problema de negócio",
        content:
          "Evolução de sistemas CRM integrados exigia análise contínua de necessidades, priorização de demandas e comunicação efetiva entre áreas técnicas e de negócio.",
        users: [
          "Clientes do ERP",
          "Times internos de produto e tecnologia",
          "Áreas de vendas e suporte",
        ],
      },
      papel: {
        title: "Meu papel",
        items: [
          "Levantamento e análise de necessidades de negócio e clientes",
          "Ponto focal entre clientes e times técnicos",
          "Uso de SQL para análise de dados e validação de hipóteses",
          "Documentação e padronização de processos",
        ],
      },
      processo: {
        title: "Processo",
        items: [
          "Priorização de demandas com foco em impacto e valor",
          "Apoio a testes, homologações e definição de critérios de aceitação",
          "Participação em times ágeis com metodologia Scrum",
          "Documentação no Confluence e Jira",
        ],
      },
      entregaveis: {
        title: "Entregáveis",
        items: [
          "Documentação de requisitos funcionais e não funcionais",
          "Análises de dados e relatórios",
          "Melhorias em sistemas CRM",
          "Processos documentados e padronizados",
        ],
      },
      resultados: {
        title: "Resultados",
        items: [
          "Maior clareza nas demandas e prioridades",
          "Redução de retrabalho e incidentes",
          "Evolução contínua do CRM integrado",
          "Alinhamento entre áreas técnicas e de negócio",
        ],
      },
    },
  },
  {
    company: "ZEEV",
    role: "Especialista Low Code",
    shortDescription:
      "automação de processos, integrações e sistemas financeiros B2B",
    tabs: {
      contexto: {
        title: "Problema de negócio",
        content:
          "Empresas enfrentavam processos manuais e fragmentados, com necessidade de automação de workflows, integrações entre sistemas e padronização de fluxos financeiros para ganhar eficiência operacional.",
        users: [
          "Gestores de operações e processos",
          "Times de TI e desenvolvimento",
          "Áreas financeiras e de compliance",
        ],
      },
      papel: {
        title: "Meu papel",
        items: [
          "Levantamento e documentação de requisitos funcionais para automação de processos e workflows usando BPMN",
          "Desenvolvimento de protótipos no Figma e validações com usuários-chave",
          "Tradução de demandas de negócio em soluções funcionais viáveis",
          "Alinhamentos frequentes com stakeholders para reduzir retrabalho",
        ],
      },
      processo: {
        title: "Processo",
        items: [
          "Análises exploratórias em banco de dados para apoiar iniciativas de automação",
          "Estruturação de documentação funcional detalhada",
          "Apoio em processos de homologação e testes com usuários e equipe de desenvolvimento",
          "Orientações técnicas para customizações via JavaScript",
        ],
      },
      entregaveis: {
        title: "Entregáveis",
        items: [
          "Documentação funcional estruturada e relatórios visuais",
          "Protótipos validados no Figma",
          "Fluxos e regras de negócio para sistemas financeiros",
          "Análises de sistemas e propostas de melhorias",
        ],
      },
      resultados: {
        title: "Resultados",
        items: [
          "Redução de tempo operacional com automações de processos internos",
          "Padronização de fluxos e melhoria da previsibilidade das entregas",
          "Maior eficiência por meio de documentação clara e alinhamento contínuo",
          "Interoperabilidade entre plataformas com boas práticas de APIs e integrações",
        ],
      },
    },
  },
];

interface ExperienceCardProps {
  experience: (typeof experiences)[0];
  index: number;
  isInView: boolean;
}

const ExperienceCard = ({ experience, index, isInView }: ExperienceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="rounded-2xl overflow-hidden border border-border/50"
    >
      {/* Header - Always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-primary/10 p-6 md:p-8 flex items-center gap-4 md:gap-6 text-left hover:bg-primary/15 transition-colors"
      >
        {/* Icon */}
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-card flex items-center justify-center flex-shrink-0 shadow-sm border border-border/30">
          <Building2 className="w-7 h-7 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-card text-primary font-medium text-xs border border-primary/30 mb-2">
            {experience.role}
          </span>
          <h3 className="text-xl md:text-2xl font-display font-bold text-foreground tracking-wide uppercase">
            {experience.company}
          </h3>
          <p className="text-muted-foreground text-sm md:text-base mt-1">
            {experience.shortDescription}
          </p>
        </div>

        {/* Chevron */}
        <ChevronDown
          className={`w-6 h-6 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expandable Content */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden bg-card"
      >
        <div className="p-6 md:p-8 border-t border-border/30">
          <Tabs defaultValue="contexto" className="w-full">
            <TabsList className="w-full justify-start bg-muted/30 rounded-none p-0 mb-8 h-auto border-b border-border/30">
              <TabsTrigger 
                value="contexto" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-muted-foreground data-[state=active]:text-foreground"
              >
                Contexto
              </TabsTrigger>
              <TabsTrigger 
                value="papel" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-muted-foreground data-[state=active]:text-foreground"
              >
                Meu Papel
              </TabsTrigger>
              <TabsTrigger 
                value="processo" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-muted-foreground data-[state=active]:text-foreground"
              >
                Processo
              </TabsTrigger>
              <TabsTrigger 
                value="entregaveis" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-muted-foreground data-[state=active]:text-foreground"
              >
                Entregáveis
              </TabsTrigger>
              <TabsTrigger 
                value="resultados" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-muted-foreground data-[state=active]:text-foreground"
              >
                Resultados
              </TabsTrigger>
            </TabsList>

            <TabsContent value="contexto" className="mt-0">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {experience.tabs.contexto.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.tabs.contexto.content}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Usuários impactados
                  </h4>
                  <ul className="space-y-1">
                    {experience.tabs.contexto.users.map((user, i) => (
                      <li key={i} className="text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        {user}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="papel" className="mt-0">
              <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {experience.tabs.papel.title}
              </h4>
              <ul className="space-y-2">
                {experience.tabs.papel.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="processo" className="mt-0">
              <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {experience.tabs.processo.title}
              </h4>
              <ul className="space-y-2">
                {experience.tabs.processo.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="entregaveis" className="mt-0">
              <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {experience.tabs.entregaveis.title}
              </h4>
              <ul className="space-y-2">
                {experience.tabs.entregaveis.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="resultados" className="mt-0">
              <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {experience.tabs.resultados.title}
              </h4>
              <ul className="space-y-2">
                {experience.tabs.resultados.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experiencia"
      className="section-padding bg-background"
      ref={ref}
    >
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
              Trajetória Profissional
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-6"
          >
            Experiências em Produtos Digitais
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Uma visão detalhada dos desafios, processos e resultados que marcaram minha jornada como Product Manager.
          </motion.p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.company}
              experience={exp}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
