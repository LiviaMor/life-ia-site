import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Database, Zap, BarChart3, Lock, Users } from "lucide-react";
import { useState } from "react";

/**
 * LIFE IA – Regulação Autônoma
 * Design: Modernismo Corporativo com Ênfase em Dados
 * Paleta: Azul profundo (#0F3A7D) + Ciano (#00D9FF) + Cinza (#2D3E50)
 * Tipografia: Poppins (títulos) + Inter (corpo)
 */

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
            <a href="#diferenciais" className="text-sm hover:text-accent transition">
              Diferenciais
            </a>
            <Button className="bg-primary hover:bg-primary/90">
              Agende uma Demo
            </Button>
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
              Onde a Tecnologia Encontra a <span className="text-accent">Cura</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              LIFE IA: Transformando a complexidade da regulação hospitalar em agilidade para salvar vidas através de interoperabilidade inteligente.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Conheça a Solução <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Agende uma Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* O Problema */}
      <section id="problema" className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="display-md text-primary mb-6">O Problema</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              "A regulação de vagas não pode ser um 'buraco negro'. Hoje, a latência da informação e dados desestruturados custam tempo que o paciente não tem."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⏱️",
                title: "Latência Crítica",
                desc: "Informações atrasadas custam vidas. Cada minuto importa.",
              },
              {
                icon: "🗂️",
                title: "Dados Desorganizados",
                desc: "Sistemas legados não conversam entre si. Silos de informação.",
              },
              {
                icon: "❌",
                title: "Decisões Manuais",
                desc: "Processamento humano lento e propenso a erros em volume alto.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-gray-50 rounded-lg border border-border hover:border-accent/50 transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-3 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona - Pipeline */}
      <section id="solucao" className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="display-md text-primary mb-4">Como o LIFE IA Funciona</h2>
            <p className="text-lg text-muted-foreground">
              O Pipeline Inteligente: Ingestão → Inteligência → Síntese
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                layer: "Ingestão",
                tech: "Tesseract OCR",
                func: "Digitaliza laudos e guias físicas, eliminando o papel e o erro humano na entrada de dados.",
                icon: Database,
              },
              {
                layer: "Inteligência",
                tech: "BioBERT",
                func: "Especializada em NLP clínico, interpreta o contexto médico e extrai entidades com precisão científica.",
                icon: Brain,
              },
              {
                layer: "Síntese",
                tech: "Llama (LLM)",
                func: "Consolida dados complexos em resumos executivos para apoio à decisão do médico regulador.",
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
                  <p className="text-sm font-mono text-accent mb-3">{item.tech}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.func}</p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <div className="text-center text-sm text-muted-foreground">
              <p>Resultado: Decisões em tempo real, com confiança científica</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Estratégicos */}
      <section id="diferenciais" className="py-24 bg-white">
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
                desc: "Sistemas que finalmente falam a mesma língua. Integração perfeita com infraestrutura existente do SUS.",
              },
              {
                icon: Users,
                title: "Burocracia Cognitiva Zero",
                desc: "Deixe a IA processar o volume; deixe os humanos tomarem as decisões. Foco no que importa.",
              },
              {
                icon: BarChart3,
                title: "Foco no SUS",
                desc: "Solução desenhada para a escala e os desafios reais da saúde pública brasileira.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-8 bg-gray-50 rounded-lg border border-border hover:border-accent/50 transition">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
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
            Junte-se às instituições de saúde que já estão economizando tempo e salvando vidas com LIFE IA.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Agende uma Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Saiba Mais
            </Button>
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
                Transformando a regulação hospitalar através de inteligência artificial.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Como Funciona</a></li>
                <li><a href="#" className="hover:text-white transition">Diferenciais</a></li>
                <li><a href="#" className="hover:text-white transition">Preços</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Termos</a></li>
                <li><a href="#" className="hover:text-white transition">LGPD</a></li>
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
