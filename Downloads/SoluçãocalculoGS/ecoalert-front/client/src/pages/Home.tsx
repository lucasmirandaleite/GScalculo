import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowUpRight, TrendingUp, AlertTriangle, Zap, FileText, BookOpen } from "lucide-react";

/**
 * Design Philosophy: Modernismo Sustentável com Dados Visuais
 * - Gráficos e números são protagonistas
 * - Paleta verde-azul transmite confiança ambiental
 * - Tipografia Poppins bold para títulos, Inter regular para corpo
 * - Espaçamento generoso, layout assimétrico
 * - BOTÕES INTERATIVOS com scroll e modais
 */

export default function Home() {
  const [openAnalise, setOpenAnalise] = useState(false);
  const [openDocumentacao, setOpenDocumentacao] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-foreground">EcoAlert</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("analise")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Análise
            </button>
            <button
              onClick={() => scrollToSection("graficos")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Gráficos
            </button>
            <button
              onClick={() => scrollToSection("solucao")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Solução
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section - Assimétrico */}
      <section className="container py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                ENGENHARIA DE SOFTWARE
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Monitoramento Inteligente de Resíduos Urbanos
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">
              Análise matemática do crescimento exponencial de descarte irregular no Córrego da Avenida Águia de Haia. Uma solução digital para transformar dados em ação.
            </p>
            <div className="flex gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("analise")}
                className="bg-primary hover:bg-primary/90 text-white gap-2 cursor-pointer"
              >
                Ver Análise <ArrowUpRight className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => setOpenDocumentacao(true)}
                variant="outline"
                className="cursor-pointer"
              >
                Relatório Técnico
              </Button>
            </div>
          </div>

          {/* Métricas Principais */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="text-sm text-muted-foreground mb-2">Crescimento Semanal</div>
              <div className="text-3xl font-bold text-primary">30.41%</div>
              <div className="text-xs text-muted-foreground mt-2">Padrão Exponencial</div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-accent/5 to-destructive/5 border-accent/20 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="text-sm text-muted-foreground mb-2">Ponto Crítico</div>
              <div className="text-3xl font-bold text-accent">Semana 12</div>
              <div className="text-xs text-muted-foreground mt-2">~3 meses</div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="text-sm text-muted-foreground mb-2">Previsão 6 Meses</div>
              <div className="text-3xl font-bold text-secondary">22.2 ton</div>
              <div className="text-xs text-muted-foreground mt-2">Volume Acumulado</div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-destructive/5 to-accent/5 border-destructive/20 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="text-sm text-muted-foreground mb-2">Status Atual</div>
              <div className="text-3xl font-bold text-destructive">ALERTA</div>
              <div className="text-xs text-muted-foreground mt-2">Ação necessária</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Análise Matemática */}
      <section id="analise" className="container py-20">
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-2">Interpretação Matemática</h3>
            <p className="text-muted-foreground">O comportamento do descarte segue um padrão exponencial (efeito "vizinhança degradada")</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-primary/20 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Modelo Exponencial</h4>
                  <p className="text-sm text-muted-foreground">
                    Crescimento de ~30,41% por semana. O acúmulo inicial atrai ainda mais descarte irregular.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-secondary/20 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Função Matemática</h4>
                  <p className="text-sm text-muted-foreground">
                    <code className="text-xs bg-muted px-2 py-1 rounded">f(x) = 37.99 × e^(0.27x)</code>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-accent/20 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Análise Crítica</h4>
                  <p className="text-sm text-muted-foreground">
                    Ignorar o problema hoje significa enfrentá-lo muito maior amanhã. Ação preventiva é urgente.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Gráficos */}
      <section id="graficos" className="container py-20">
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-2">Visualização dos Dados</h3>
            <p className="text-muted-foreground">Comparação de modelos e projeção de cenários futuros</p>
          </div>

          <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              src="/manus-storage/graficos_residuos_c71bf92a.png"
              alt="Gráficos de Crescimento de Resíduos"
              className="w-full h-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-foreground mb-3">Comparação de Modelos</h4>
              <p className="text-sm text-muted-foreground mb-4">
                O modelo exponencial se mostrou superior ao linear para representar a realidade do descarte no local.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  Dados Reais: Coleta simulada de 5 semanas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  Modelo Exponencial: Melhor ajuste matemático
                </li>
              </ul>
            </Card>

            <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-foreground mb-3">Projeção para 6 Meses</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Em 24 semanas, o volume chegaria a surreais 22,2 toneladas se nenhuma intervenção for feita.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  Tendência Exponencial: Crescimento acelerado
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 border-2 border-red-500 rounded-full"></span>
                  Limite Crítico: 1000 kg (Risco de Enchente)
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Proposta Digital */}
      <section id="solucao" className="container py-20">
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-2">Proposta Digital</h3>
            <p className="text-muted-foreground">Solução de Engenharia de Software: EcoAlert - Monitoramento Inteligente</p>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <div className="space-y-6">
              <div>
                <h4 className="text-2xl font-bold text-primary mb-2">EcoAlert - Dashboard de Monitoramento Urbano</h4>
                <p className="text-muted-foreground">
                  Um sistema integrado que utiliza metodologias ágeis e ciência de dados para transformar o problema do descarte em decisões automatizadas.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm font-bold">1</span>
                    <h5 className="font-semibold text-foreground">Coleta (IoT)</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sensores instalados em caçambas medem o nível de resíduos e moradores registram denúncias via App.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 bg-secondary text-white rounded-full text-sm font-bold">2</span>
                    <h5 className="font-semibold text-foreground">Processamento (Algoritmos)</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sistemas de análise calculam a tendência de acúmulo e identificam regiões críticas em tempo real.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 bg-accent text-white rounded-full text-sm font-bold">3</span>
                    <h5 className="font-semibold text-foreground">Ação (Automação)</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Geração automática de Ordens de Serviço para limpeza preventiva antes que o volume atinja o limite crítico.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                Relação com Engenharia de Software
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>✓ Modelos preditivos baseados em ciência de dados</li>
                <li>✓ Automação de processos de gestão urbana</li>
                <li>✓ Uso de metodologias ágeis para resposta rápida</li>
                <li>✓ Integração de sensores IoT e sistemas mobile</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-secondary rounded-full"></span>
                Alinhamento com ODS
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>🌍 ODS 11: Cidades e Comunidades Sustentáveis</li>
                <li>♻️ ODS 12: Consumo e Produção Responsáveis</li>
                <li>🌡️ ODS 13: Ação Contra a Mudança Global do Clima</li>
                <li>🏥 ODS 03: Saúde e Bem-Estar</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="container py-20">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-12 text-center text-white space-y-6">
          <h3 className="text-3xl font-bold">Pronto para transformar dados em ação?</h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            O EcoAlert demonstra como a Engenharia de Software pode resolver problemas urbanos reais através de análise matemática e automação inteligente.
          </p>
          <Button
            onClick={() => setOpenDocumentacao(true)}
            className="bg-white text-primary hover:bg-white/90 cursor-pointer"
          >
            Acessar Relatório Completo
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2026 EcoAlert - Projeto de Engenharia de Software</p>
            <p>Análise do Córrego da Avenida Águia de Haia</p>
          </div>
        </div>
      </footer>

      {/* Dialog: Relatório Técnico Completo (Substituindo Documentação) */}
      <Dialog open={openDocumentacao} onOpenChange={setOpenDocumentacao}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <FileText className="w-6 h-6 text-primary" />
              Relatório Técnico de Engenharia de Software
            </DialogTitle>
            <DialogDescription>
              Análise detalhada do descarte irregular de resíduos urbanos
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-8 py-4 text-foreground leading-relaxed">
            <section className="space-y-3">
              <h4 className="text-lg font-bold flex items-center gap-2 border-b pb-2 text-primary">
                <span className="w-1 h-5 bg-primary rounded-full"></span>
                1. CONTEXTUALIZAÇÃO
              </h4>
              <p className="text-muted-foreground">
                Para este trabalho, escolhemos analisar o <strong>Córrego da Avenida Águia de Haia</strong>. Durante as observações, ficou evidente que o descarte irregular de móveis e resíduos domésticos tem aumentado bastante na região, o que vem prejudicando tanto a drenagem urbana quanto a qualidade de vida dos moradores do entorno. A escolha desse local também se justifica pela conexão direta com dois objetivos de desenvolvimento sustentável: o <strong>ODS 11</strong> (Cidades Sustentáveis) e o <strong>ODS 12</strong> (Consumo Responsável).
              </p>
            </section>

            <section className="space-y-3">
              <h4 className="text-lg font-bold flex items-center gap-2 border-b pb-2 text-primary">
                <span className="w-1 h-5 bg-primary rounded-full"></span>
                2. INTERPRETAÇÃO MATEMÁTICA
              </h4>
              <p className="text-muted-foreground">
                Ao analisar os dados coletados, identificamos que o comportamento do descarte segue um padrão <strong>exponencial</strong>. Isso faz sentido na prática: quando um local começa a acumular lixo, ele tende a atrair ainda mais descarte — um efeito conhecido como <strong>"vizinhança degradada"</strong>.
              </p>
              <p className="text-muted-foreground">Testamos dois modelos matemáticos para representar esse crescimento:</p>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                <p>• Modelo linear: f(x) = 23,50x + 19,90</p>
                <p>• Modelo exponencial: f(x) = 37,99 · e^(0,27x)</p>
              </div>
              <p className="text-muted-foreground">
                O modelo exponencial se mostrou mais adequado, com crescimento semanal de aproximadamente <strong>30,41%</strong>. Com base nisso, a projeção para 6 meses aponta um volume acumulado de cerca de <strong>22.262 kg</strong> — um número bastante preocupante.
              </p>
              <p className="text-muted-foreground">
                O ponto mais crítico identificado foi a <strong>semana 12,3</strong> (por volta do terceiro mês), quando o volume deve ultrapassar 1.000 kg, limite a partir do qual o risco de enchente se torna imediato.
              </p>
            </section>

            <section className="space-y-3">
              <h4 className="text-lg font-bold flex items-center gap-2 border-b pb-2 text-primary">
                <span className="w-1 h-5 bg-primary rounded-full"></span>
                3. ANÁLISE CRÍTICA
              </h4>
              <p className="text-muted-foreground">
                O que os dados mostram, na prática, é que ignorar o problema hoje significa enfrentá-lo muito maior amanhã. O crescimento exponencial não deixa margem para intervenções lentas: se nada for feito, o sistema de drenagem do córrego pode colapsar em menos de um trimestre.
              </p>
              <p className="text-muted-foreground">
                Vale destacar que campanhas educativas, por si só, provavelmente não serão suficientes para reverter esse quadro. O ciclo de descarte precisa ser interrompido com ferramentas de monitoramento contínuo, que permitam agir antes que a situação saia do controle.
              </p>
            </section>

            <section className="space-y-3">
              <h4 className="text-lg font-bold flex items-center gap-2 border-b pb-2 text-primary">
                <span className="w-1 h-5 bg-primary rounded-full"></span>
                4. PROPOSTA DIGITAL E ENGENHARIA DE SOFTWARE
              </h4>
              <p className="text-muted-foreground">
                A partir dessa análise, desenvolvemos a proposta de um sistema chamado <strong>EcoAlert — Dashboard de Monitoramento Urbano</strong>. A ideia central é simples: monitorar o volume de resíduos em tempo real e acionar equipes de limpeza antes que o problema se agrave.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <Card className="p-4 bg-primary/5 border-primary/20">
                  <h5 className="font-bold text-primary mb-1 text-xs">COLETA</h5>
                  <p className="text-xs text-muted-foreground">Sensores IoT em caçambas e denúncias via aplicativo mobile.</p>
                </Card>
                <Card className="p-4 bg-secondary/5 border-secondary/20">
                  <h5 className="font-bold text-secondary mb-1 text-xs">PROCESSAMENTO</h5>
                  <p className="text-xs text-muted-foreground">Motor de análise preditiva (IA) que calcula tendências.</p>
                </Card>
                <Card className="p-4 bg-accent/5 border-accent/20">
                  <h5 className="font-bold text-accent mb-1 text-xs">AÇÃO</h5>
                  <p className="text-xs text-muted-foreground">Ordens de Serviço automáticas para coleta preventiva.</p>
                </Card>
              </div>
              <p className="text-muted-foreground pt-4">
                Do ponto de vista da <strong>Engenharia de Software</strong>, o projeto aplica metodologias ágeis para garantir respostas rápidas e usa ciência de dados para transformar um problema urbano real em decisões automatizadas e mais eficientes.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
