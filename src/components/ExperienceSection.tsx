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
          "Empresas, com forte atuação contábil, enfrentavam dificuldades na gestão de contas a receber de seus clientes devido a processos manuais e dados fragmentados entre ERPs, planilhas e bancos. Esse cenário gerava baixa visibilidade financeira, retrabalho operacional e dificuldade de escalar a operação de cobrança.",
        users: [
          "Escritórios de contabilidade",
          "Contadores e analistas financeiros",
          "Times de cobrança e operações financeiras",
          "Áreas de controladoria e planejamento",
        ],
        restrictions: [
          "Dependência de integrações com ERPs e instituições financeiras",
          "Diferentes níveis de maturidade tecnológica dos clientes",
          "Necessidade de alta confiabilidade e consistência de dados",
        ],
      },
      papel: {
        title: "Meu papel",
        items: [
          "Condução das cerimônias do Scrum (Sprint Planning, Daily, Review e Retrospective), garantindo alinhamento contínuo entre produto, engenharia e stakeholders",
          "Escrita, detalhamento e priorização dos cards no backlog, com histórias de usuário claras, critérios de aceitação bem definidos e alinhamento técnico prévio com engenharia para redução de retrabalho",
          "Definição e priorização do roadmap orientadas a impacto de negócio e métricas de produto",
          "Atuação direta com C-level (CEO e CPTO) na evolução estratégica do produto e definição de prioridades",
          "Parceria próxima com o time de engenharia na definição, evolução e validação das soluções técnicas",
          "Liderança de integrações via APIs com ERPs (Conta Azul e Omie) e iniciativas de Open Finance",
          "Criação de protótipos e definição de fluxos de experiência do usuário utilizando o Lovable",
          "Tradução de necessidades financeiras complexas em soluções escaláveis, seguras e confiáveis",
        ],
      },
      processo: {
        title: "Processo",
        items: [
          "Discovery contínuo com entrevistas com clientes, análise quantitativa de dados e exploração de feedbacks para identificação de oportunidades de maior impacto",
          "Priorização estruturada das iniciativas com base em impacto de negócio, esforço técnico e risco operacional, utilizando frameworks como RICE e Value vs. Effort",
          "Definição clara de escopo por meio de PRDs completos, critérios de aceitação e alinhamentos técnicos prévios com engenharia",
          "Colaboração próxima com engenharia para decisões arquiteturais e desenho de integrações via APIs com ERPs e parceiros financeiros",
          "Execução iterativa com entregas incrementais, monitoramento contínuo de KPIs e ajustes rápidos após o lançamento",
          "Realização de experimentos e testes A/B para validação de hipóteses e otimização de fluxos críticos da jornada do cliente",
        ],
      },
      entregaveis: {
        title: "Entregáveis",
        items: [
          "Roadmap estratégico priorizado com base em métricas de adoção, eficiência operacional e impacto financeiro, alinhado aos objetivos de negócio",
          "PRDs completos com critérios de aceitação claros, fluxos de integração e requisitos funcionais para automação de cobranças, conciliação e APIs financeiras",
          "Especificações funcionais e técnicas para integrações com ERPs (Conta Azul e Omie) e instituições financeiras, validadas em parceria com engenharia",
          "Desenho e evolução dos fluxos de cobrança automatizada e reconciliação financeira, focados na redução de fricção operacional e aumento de conversão",
          "Dashboards executivos de acompanhamento de KPIs operacionais e de negócio, suportando decisões contínuas de roadmap e priorização",
          "Estruturação de processos de discovery contínuo, experimentação e testes A/B para validação de hipóteses antes do desenvolvimento",
        ],
      },
      resultados: {
        title: "Resultados",
        items: [
          "Integrações com ERPs (Conta Azul e Omie) adotadas por aproximadamente 40% da base ativa, ampliando a automação financeira e reduzindo dependência de processos manuais",
          "Automação da operação de cobrança e conciliação, resultando em 70% de redução no atraso médio dos pagamentos, 50% de redução na inadimplência e economia mensal de 100 horas operacionais para os times financeiros",
          "Mais de 80% das sprints entregues conforme planejado, elevando previsibilidade, confiabilidade no delivery e alinhamento entre produto, engenharia e negócio",
          "Aumento da taxa de conversão no onboarding por meio de experimentos contínuos, otimização de fluxos e decisões orientadas por dados",
          "Reposicionamento estratégico do produto como hub central de cobranças, consolidando integrações financeiras e fortalecendo a proposta de valor para clientes B2B",
        ],
      },
    },
  },
  {
    company: "STOOM",
    role: "Product Owner",
    shortDescription:
      "reestruturação de site B2C e B2B, jornadas de compra e integrações técnicas",
    tabs: {
      contexto: {
        title: "Problema de negócio",
        content:
          "Um supermercado atacadista enfrentava limitações em seu site, que não atendia adequadamente às diferentes jornadas de clientes B2C e B2B, dificultando navegação, conversão e escalabilidade do negócio digital. O desafio era reestruturar o site de ponta a ponta, alinhando experiência do usuário, regras comerciais, meios de pagamento e integrações técnicas às necessidades do negócio atacadista.",
        users: [
          "Clientes finais (B2C)",
          "Clientes corporativos e compradores recorrentes (B2B)",
          "Times internos de comercial, marketing, operações e tecnologia",
        ],
        restrictions: [
          "Regras comerciais distintas entre B2C e B2B",
          "Jornadas críticas de compra e pagamento",
          "Dependência de integrações técnicas com sistemas internos",
          "Necessidade de garantir performance, estabilidade e escalabilidade",
          "Operação de alto volume e impacto direto em faturamento",
        ],
      },
      papel: {
        title: "Meu papel",
        items: [
          "Atuação como Product Owner responsável pela reestruturação completa do site e das jornadas B2C e B2B",
          "Tradução de objetivos de negócio em requisitos funcionais e não funcionais, alinhando estratégia, experiência do usuário e viabilidade técnica",
          "Interface contínua entre negócio, design e engenharia para garantir alinhamento, velocidade e qualidade na execução",
          "Definição e priorização do backlog com foco em conversão, eficiência operacional e valor para o cliente",
          "Apoio à tomada de decisão em jornadas críticas de compra e pagamento, orientando trade-offs e escopo das iniciativas",
        ],
      },
      processo: {
        title: "Processo",
        items: [
          "Levantamento e validação de requisitos junto a stakeholders de negócio e tecnologia",
          "Mapeamento de jornadas de compra end-to-end, identificando gargalos e oportunidades",
          "Redefinição de fluxos de navegação, checkout e regras comerciais",
          "Priorização considerando impacto no negócio, esforço técnico e riscos operacionais",
          "Acompanhamento das entregas em rituais ágeis, garantindo alinhamento contínuo",
        ],
      },
      entregaveis: {
        title: "Entregáveis",
        items: [
          "Levantamento e documentação de requisitos funcionais e não funcionais para jornadas B2C e B2B e integrações técnicas",
          "Histórias de usuário e critérios de aceitação detalhados no Jira, orientando squads e reduzindo retrabalho durante a execução",
          "Documentação funcional e técnica no Confluence para suportar desenvolvimento, testes e rollout das iniciativas",
          "Redesenho dos fluxos de navegação e jornadas de compra com foco em redução de fricção e melhoria da experiência do usuário",
          "Apoio à homologação funcional e validações com áreas de negócio e tecnologia para garantir qualidade e alinhamento na entrega",
        ],
      },
      resultados: {
        title: "Resultados",
        items: [
          "Aumento de aproximadamente 30% na previsibilidade das entregas após a estruturação do processo de discovery e priorização contínua do backlog",
          "Redução estimada de 25% no retrabalho operacional em fluxos enterprise com a evolução do processo Procure to Pay end-to-end, impactando múltiplas áreas do negócio",
          "Integração técnica com 4+ sistemas parceiros via APIs, resultando em ganho aproximado de 20% na eficiência operacional dos fluxos financeiros",
          "Melhoria de cerca de 15% nas taxas de conversão das jornadas digitais B2C e B2B por meio da redução de fricções no checkout e otimização da experiência de compra",
          "Redução de aproximadamente 20% no lead time de decisões estratégicas entre produto, engenharia e áreas de negócio, acelerando a execução das iniciativas",
        ],
      },
    },
  },
  {
    company: "OMIE",
    role: "Product Owner",
    shortDescription:
      "produto digital B2B, conectando negócio, produto e tecnologia",
    tabs: {
      contexto: {
        title: "Problema de negócio",
        content:
          "A Omie operava produtos digitais B2B críticos para a gestão empresarial, com alta dependência de dados, integrações e processos bem definidos. O desafio era garantir que necessidades complexas de negócio fossem corretamente compreendidas, priorizadas e traduzidas em soluções funcionais, mantendo a evolução contínua do produto sem comprometer estabilidade e qualidade.",
        users: [
          "Clientes B2B da plataforma",
          "Times internos de produto, engenharia e suporte",
          "Áreas de negócio e operações",
        ],
        restrictions: [
          "Sistemas críticos com alto impacto operacional",
          "Dependência de dados consistentes e integrações confiáveis",
          "Necessidade de clareza e rastreabilidade de requisitos",
          "Ambiente de evolução contínua com demandas concorrentes",
        ],
      },
      papel: {
        title: "Meu papel",
        items: [
          "Atuação como Analista de Negócios em produto digital B2B",
          "Tradução de objetivos estratégicos em requisitos funcionais e não funcionais",
          "Interface entre clientes, negócio, produto e tecnologia, garantindo alinhamento e clareza",
          "Apoio à tomada de decisão por meio de análise de dados e evidências",
          "Contribuição direta para a evolução e sustentação de sistemas críticos",
        ],
      },
      processo: {
        title: "Processo",
        items: [
          "Mapeamento de necessidades junto a clientes e stakeholders internos",
          "Análise e priorização de demandas considerando impacto, viabilidade técnica e valor de negócio",
          "Estruturação e validação de requisitos com times de produto e engenharia",
          "Uso de SQL e análise exploratória de dados para validar hipóteses e identificar causas raiz",
          "Participação ativa em rituais ágeis para alinhamento contínuo e acompanhamento das entregas",
        ],
      },
      entregaveis: {
        title: "Entregáveis",
        items: [
          "Requisitos funcionais e não funcionais documentados e validados",
          "Histórias de usuário e critérios de aceitação estruturados (BDD)",
          "Documentação funcional e técnica no Confluence",
          "Gestão de backlog e acompanhamento de entregas no Jira",
          "Mapas de jornada e fluxos de negócio no Miro",
          "Protótipos funcionais no Figma para validação de fluxos",
        ],
      },
      resultados: {
        title: "Resultados",
        items: [
          "Aumento de aproximadamente 25% na previsibilidade da evolução do produto após a padronização do processo de discovery e priorização do backlog",
          "Redução estimada de 30% no retrabalho por meio da definição clara de requisitos funcionais e não funcionais e alinhamento contínuo entre áreas técnicas e de negócio",
          "Ampliação da tomada de decisão orientada a dados, com uso recorrente de SQL e dashboards, contribuindo para redução de cerca de 20% no tempo médio de resolução de incidentes",
          "Melhoria de aproximadamente 20% na eficiência operacional dos fluxos entre módulos de CRM integrados por meio da evolução das integrações sistêmicas",
          "Fortalecimento da integração entre negócio, produto e tecnologia, refletido em ciclos de entrega mais rápidos e maior confiabilidade das iniciativas estratégicas",
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
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {experience.tabs.contexto.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.tabs.contexto.content}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Usuários impactados
                  </h4>
                  <ul className="space-y-2">
                    {experience.tabs.contexto.users.map((user, i) => (
                      <li key={i} className="text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        {user}
                      </li>
                    ))}
                  </ul>
                </div>
                {experience.tabs.contexto.restrictions && (
                  <div>
                    <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Restrições
                    </h4>
                    <ul className="space-y-2">
                      {experience.tabs.contexto.restrictions.map((restriction, i) => (
                        <li key={i} className="text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                          {restriction}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
              Professional Journey
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
