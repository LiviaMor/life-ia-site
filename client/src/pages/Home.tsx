import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Database, Zap, BarChart3, Lock, Users, Filter, Layers, MapPin, Clock, FolderOpen, XCircle, LayoutDashboard, Building2, Stethoscope, Ambulance, ClipboardList, ShieldCheck, Unlock, FileText } from "lucide-react";
import { useState } from "react";

/**
 * LIFE IA – Regulação Autônoma
 * Design: Modernismo Corporativo com Ênfase em Dados
 * Paleta: Azul profundo (#0F3A7D) + Ciano (#00D9FF) + Cinza (#2D3E50)
 * Tipografia: Poppins (títulos) + Inter (corpo)
 * 
 * Baseado na documentação oficial:
 * - README.md: Visão geral e arquitetura
 * - PIPELINE_HOSPITAIS_GOIAS_IMPLEMENTADO.md: Mapeamento de hospitais
 * - PIPELINE_RAG_FOCADO_IMPLEMENTADO.md: Lógica de peneira
 * - MS_INGESTAO_IMPLEMENTADO.md: Ingestão de dados em tempo real
 */

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedArea, setExpandedArea] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="font-bold text-lg text-primary">LIFE IA</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#problema" className="text-sm hover:text-accent transition">
              O Problema
            </a>
            <a href="#solucao" className="text-sm hover:text-accent transition">
              Como Funciona
            </a>
            <a href="#funcionalidades" className="text-sm hover:text-accent transition">
              Funcionalidades
            </a>
            <a href="#diferenciais" className="text-sm hover:text-accent transition">
              Diferenciais
            </a>
              <a href="https://wa.me/5562936180369?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demo%20do%20LIFE%20IA" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90">
                  Agende uma Demo
                </Button>
              </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663230880244/gKPCybgPuMiMCsIW.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="display-lg text-white mb-6 leading-tight">
              LIFE IA - <span className="text-accent">Regulação Autônoma</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              LIFE IA: Transformando a complexidade da regulação hospitalar em agilidade para salvar vidas através de interoperabilidade inteligente. Desenvolvido para o SUS-Goiás com IA aberta e 100% em conformidade com LGPD.
            </p>
            <div className="flex gap-4">
              <a href="mailto:contato@liviamor.com" className="inline-flex">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Conheça a Solução <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="https://wa.me/5562936180369?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demo%20do%20LIFE%20IA" target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Agende uma Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* O Problema */}
      <section id="problema" className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="display-md text-primary mb-6">O Problema Real</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A regulação de vagas não pode ser um 'buraco negro'. Hoje, a latência da informação e dados desestruturados custam tempo que o paciente não tem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Latência Crítica",
                desc: "Informações atrasadas custam vidas. Cada minuto importa na regulação de urgências.",
              },
              {
                icon: FolderOpen,
                title: "Dados Fragmentados",
                desc: "Sistemas legados não conversam. Silos de informação entre hospitais, SES e gestores.",
              },
              {
                icon: XCircle,
                title: "Decisões Manuais Lentas",
                desc: "Processamento humano lento e propenso a erros. Exemplo: dor lombar encaminhada para HUGO (trauma).",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
              <div
                key={i}
                className="p-8 bg-gray-50 rounded-lg border border-border hover:border-accent/50 transition"
              >
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como Funciona - Pipeline Inteligente */}
      <section id="solucao" className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="display-md text-primary mb-4">O Pipeline Inteligente</h2>
            <p className="text-lg text-muted-foreground">
              Três camadas de IA trabalhando em harmonia: Ingestão → Inteligência → Síntese
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                layer: "Ingestão",
                tech: "Tesseract OCR",
                weight: "30%",
                func: "Digitaliza laudos e guias físicas em tempo real, eliminando papel e erro humano na entrada de dados.",
                icon: Database,
              },
              {
                layer: "Inteligência",
                tech: "BioBERT v1.1",
                weight: "60%",
                func: "Especializada em NLP clínico, interpreta contexto médico e extrai entidades clínicas com precisão científica.",
                icon: Brain,
              },
              {
                layer: "Síntese",
                tech: "Llama 3 (LLM)",
                weight: "10%",
                func: "Consolida dados complexos em recomendações executivas para apoio à decisão do médico regulador.",
                icon: Zap,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative p-8 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                    hoveredCard === i
                      ? "border-accent bg-white shadow-lg scale-105"
                      : "border-border bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg ${hoveredCard === i ? "bg-accent/20" : "bg-gray-100"}`}>
                      <Icon className={`w-6 h-6 ${hoveredCard === i ? "text-accent" : "text-primary"}`} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">Camada</p>
                      <h3 className="text-lg font-bold text-primary">{item.layer}</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-sm font-mono text-accent">{item.tech}</p>
                    <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Peso: {item.weight}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.func}</p>
                </div>
              );
            })}
          </div>

          {/* Peneira de Decisão */}
          <div className="bg-white rounded-lg border-2 border-primary/20 p-12">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Lógica de Peneira: Como a IA Escolhe o Hospital</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  icon: Filter,
                  title: "Peneira 1: Especialidade",
                  desc: "Filtra hospitais que têm a especialidade necessária. Exemplo: Histerectomia remove HDT (Doenças Tropicais) e HUGO (Trauma).",
                },
                {
                  step: 2,
                  icon: Layers,
                  title: "Peneira 2: Complexidade",
                  desc: "Baseado no CID, prioriza hospitais adequados. Trauma grave (S06) → HUGO/HUGOL. Ortopedia eletiva (M54) → remove HUGO.",
                },
                {
                  step: 3,
                  icon: MapPin,
                  title: "Peneira 3: Localidade",
                  desc: "Prioriza hospitais regionais para não saturar capital. Formosa → Hospital de Formosa. Anápolis → HEAPA.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="relative">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-primary mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                    {i < 2 && (
                      <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                        <ArrowRight className="w-8 h-8 text-accent/30" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades Principais */}
      <section id="funcionalidades" className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="display-md text-primary mb-4">5 Áreas de Operação</h2>
            <p className="text-lg text-muted-foreground">
              LIFE IA cobre todo o fluxo de regulação hospitalar
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Dashboard Público",
                desc: "Monitoramento em tempo real da ocupação hospitalar. Tendências de ocupação (ALTA, QUEDA, ESTÁVEL) com previsão de saturação.",
                icon: LayoutDashboard,
              },
              {
                title: "Área Hospitalar",
                desc: "Solicitação de regulação com upload de documentos (laudos, guias). Análise automática por IA com OCR + BioBERT.",
                icon: Building2,
              },
              {
                title: "Área de Regulação",
                desc: "Fila de pacientes com sugestões inteligentes de hospital. Médico regulador toma decisão final com justificativa da IA.",
                icon: Stethoscope,
              },
              {
                title: "Área de Transferência",
                desc: "Acompanhamento de ambulâncias e transferências em tempo real. Integração com dados de localização e ocupação.",
                icon: Ambulance,
              },
              {
                title: "Área de Auditoria",
                desc: "Registro de altas, métricas de desempenho e logs de decisões. 100% rastreável para conformidade LGPD.",
                icon: ClipboardList,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
              <div
                key={i}
                className="border border-border rounded-lg overflow-hidden hover:border-accent/50 transition"
              >
                <button
                  onClick={() => setExpandedArea(expandedArea === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-primary">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                  <ArrowRight className={`w-5 h-5 text-accent transition-transform ${expandedArea === i ? 'rotate-90' : ''}`} />
                </button>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diferenciais Estratégicos */}
      <section id="diferenciais" className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="display-md text-primary mb-4">Diferenciais Estratégicos</h2>
            <p className="text-lg text-muted-foreground">
              Por que LIFE IA é diferente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Interoperabilidade Semântica",
                desc: "Sistemas que finalmente falam a mesma língua. Integração perfeita com infraestrutura existente do SUS-Goiás.",
              },
              {
                icon: Users,
                title: "Burocracia Cognitiva Zero",
                desc: "Deixe a IA processar o volume; deixe os humanos tomarem as decisões. Foco no que importa: salvar vidas.",
              },
              {
                icon: BarChart3,
                title: "Foco no SUS",
                desc: "Solução desenhada para a escala e os desafios reais da saúde pública brasileira. Hierarquia SUS-Goiás implementada.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-8 bg-white rounded-lg border border-border hover:border-accent/50 transition">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Conformidade */}
          <div className="mt-16 p-8 bg-white rounded-lg border-2 border-accent/20">
            <h3 className="text-xl font-bold text-primary mb-6 text-center">Conformidade & Segurança</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-2">LGPD Compliant</h4>
                <p className="text-sm text-muted-foreground">Dados pessoais anonimizados em consultas públicas</p>
              </div>
              <div>
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Unlock className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-2">IA 100% Aberta</h4>
                <p className="text-sm text-muted-foreground">Modelos open-source com documentação de treinamento</p>
              </div>
              <div>
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Auditável</h4>
                <p className="text-sm text-muted-foreground">Logs de todas as decisões da IA para rastreabilidade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Técnico */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="display-md text-primary mb-4">Stack Tecnológico</h2>
            <p className="text-lg text-muted-foreground">
              Construído com tecnologias modernas e escaláveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-border">
              <h3 className="font-bold text-primary mb-4">Backend & IA</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>Python 3.11+ com FastAPI</li>
                <li>BioBERT v1.1 (NLP Clínico)</li>
                <li>Llama 3 (LLM)</li>
                <li>Tesseract OCR</li>
                <li>PostgreSQL 15+</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-border">
              <h3 className="font-bold text-primary mb-4">Frontend & DevOps</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>React Native + Expo</li>
                <li>TypeScript 5.0+</li>
                <li>Docker & Docker Compose</li>
                <li>Dashboard em tempo real</li>
                <li>Arquitetura de microserviços</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="container text-center">
          <h2 className="display-md text-white mb-6">
            Pronto para Transformar a Regulação Hospitalar?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Junte-se às instituições de saúde que já estão economizando tempo e salvando vidas com LIFE IA. Desenvolvido para Goiás, escalável para o Brasil.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://wa.me/5562936180369?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demo%20do%20LIFE%20IA" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Agende uma Demo <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="https://github.com/LiviaMor/regulacao-ms" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Ver Documentação
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white/80 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">L</span>
                </div>
                <span className="font-bold">LIFE IA</span>
              </div>
              <p className="text-sm text-white/60">
                Regulação Autônoma para o SUS-Goiás. Desenvolvido para Goiás Aberto para IA (FAPEG).
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#solucao" className="hover:text-white transition">Como Funciona</a></li>
                <li><a href="#funcionalidades" className="hover:text-white transition">Funcionalidades</a></li>
                <li><a href="#diferenciais" className="hover:text-white transition">Diferenciais</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="https://github.com/LiviaMor/regulacao-ms" className="hover:text-white transition">GitHub</a></li>
                <li><a href="mailto:contato@liviamor.com" className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">LGPD</a></li>
                <li><a href="#" className="hover:text-white transition">Licença MIT</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2026 LIFE IA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
