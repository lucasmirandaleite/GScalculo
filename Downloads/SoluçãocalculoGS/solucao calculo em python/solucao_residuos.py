import numpy as np
import matplotlib.pyplot as plt

# --- ETAPA 1 & 2: Escolha do Problema e Coleta de Dados ---
# Local escolhido: Córrego da Avenida Águia de Haia (Ponto de descarte irregular)
local = "Córrego da Avenida Águia de Haia"
semanas = np.array([1, 2, 3, 4, 5])
volume_lixo = np.array([50, 65, 82, 110, 145])

# --- ETAPA 3: Modelagem Matemática ---

# 1. Ajuste Linear: y = ax + b
params_lin = np.polyfit(semanas, volume_lixo, 1)
a_lin, b_lin = params_lin

# 2. Ajuste Exponencial: y = a * e^(bx)
log_volume = np.log(volume_lixo)
params_exp_log = np.polyfit(semanas, log_volume, 1)
b_exp = params_exp_log[0]
a_exp = np.exp(params_exp_log[1])

def modelo_linear(x):
    return a_lin * x + b_lin

def modelo_exponencial(x):
    return a_exp * np.exp(b_exp * x)

def calcular_r2(y_real, y_previsto):
    ss_res = np.sum((y_real - y_previsto) ** 2)
    ss_tot = np.sum((y_real - np.mean(y_real)) ** 2)
    return 1 - (ss_res / ss_tot)

r2_linear = calcular_r2(volume_lixo, modelo_linear(semanas))
r2_exponencial = calcular_r2(volume_lixo, modelo_exponencial(semanas))

# --- ETAPA 4: Previsão e Gráficos ---

semanas_futuras = np.arange(1, 13)
pred_linear = modelo_linear(semanas_futuras)
pred_exponencial = modelo_exponencial(semanas_futuras)

plt.figure(figsize=(12, 6))
plt.subplot(1, 2, 1)
plt.scatter(semanas, volume_lixo, color='red', label='Dados Reais (Coletados)')
plt.plot(semanas_futuras, pred_linear, '--', label='Tendência Linear')
plt.plot(semanas_futuras, pred_exponencial, '-', label='Tendência Exponencial', color='blue')
plt.title(f'Crescimento de Resíduos: {local}')
plt.xlabel('Semanas')
plt.ylabel('Volume de Lixo (kg)')
plt.legend()
plt.grid(True)

semanas_6_meses = np.arange(1, 25)
pred_exp_longo = modelo_exponencial(semanas_6_meses)

plt.subplot(1, 2, 2)
plt.plot(semanas_6_meses, pred_exp_longo, color='orange', label='Projeção Exponencial')
plt.axhline(y=1000, color='red', linestyle='--', label='Limite Crítico (1000kg)')
plt.title('Projeção para 6 Meses (Cenário Crítico)')
plt.xlabel('Semanas')
plt.ylabel('Volume Estimado (kg)')
plt.legend()
plt.grid(True)

plt.tight_layout()
plt.savefig('graficos_residuos.png')

# --- ETAPA 5: Relatório Final com Engenharia de Software e ODS ---

def gerar_relatorio():
    impacto_6_meses = modelo_exponencial(24)
    semana_critica = np.log(1000 / a_exp) / b_exp
    
    relatorio = f"""
    --- RELATÓRIO TÉCNICO: ENGENHARIA DE SOFTWARE APLICADA AOS RESÍDUOS URBANOS ---
    
    1. CONTEXTUALIZAÇÃO (ETAPA 1):
    Para este trabalho, escolhi analisar o {local}, um ponto vulnerável ao descarte
    irregular de móveis, resíduos domésticos e entulho. O acúmulo de lixo nessa região
    prejudica a drenagem urbana, aumenta o risco de enchentes, favorece a proliferação
    de doenças e reduz a qualidade de vida dos moradores.

    A análise está alinhada aos ODS 11 (Cidades Sustentáveis), ODS 12 (Consumo
    Responsável), ODS 13 (Ação Climática) e ODS 3 (Saúde e Bem-estar), pois o problema
    envolve gestão urbana, consumo inadequado, impacto ambiental e saúde pública.

    2. COLETA OU SIMULAÇÃO DE DADOS (ETAPA 2):
    Como base para a modelagem, utilizei uma série semanal simulada a partir de uma
    situação realista de crescimento do descarte irregular:
        Semana 1: 50 kg
        Semana 2: 65 kg
        Semana 3: 82 kg
        Semana 4: 110 kg
        Semana 5: 145 kg

    Esses valores representam um cenário em que o volume cresce progressivamente e
    permite testar matematicamente se o comportamento é linear ou exponencial.
    
    3. MODELAGEM E INTERPRETAÇÃO MATEMÁTICA (ETAPAS 3 E 4):
    Foram testadas duas funções para representar o crescimento do descarte:
        Linear: f(x) = {a_lin:.2f}x + {b_lin:.2f}
        Exponencial: f(x) = {a_exp:.2f} * e^({b_exp:.2f}x)

    O modelo linear considera que o lixo aumenta sempre em uma quantidade parecida por
    semana. Já o modelo exponencial considera que o problema acelera: quanto mais lixo
    existe no local, maior tende a ser o descarte nas semanas seguintes.

    Para justificar a escolha do modelo, comparei o ajuste dos dois modelos aos dados:
        R² do modelo linear: {r2_linear:.4f}
        R² do modelo exponencial: {r2_exponencial:.4f}

    Como o modelo exponencial apresenta melhor ajuste e representa melhor a lógica urbana
    do problema, ele foi usado para a projeção futura. O padrão estimado é de crescimento
    de aproximadamente {(np.exp(b_exp) - 1) * 100:.2f}% por semana.

    Previsão futura:
    Em 6 meses, o volume estimado chegaria a aproximadamente {impacto_6_meses:.2f} kg.
    O limite crítico de 1000 kg, associado a risco imediato de enchente e bloqueio da
    drenagem, seria atingido por volta da semana {semana_critica:.1f}, aproximadamente
    no terceiro mês.
    
    4. ANÁLISE CRÍTICA:
    A análise mostra que o problema não é estático. Ele tende a acelerar quando não há
    intervenção, porque locais já degradados passam a ser vistos como pontos aceitos de
    descarte irregular. Isso torna a resposta tardia mais cara e menos eficiente.

    Campanhas educativas são importantes, mas isoladamente não resolvem o problema. É
    necessário combinar educação ambiental, fiscalização, coleta preventiva e tecnologia
    de monitoramento para antecipar o risco e interromper o ciclo de acúmulo.
    
    5. PROPOSTA DIGITAL (ENGENHARIA DE SOFTWARE):
    A solução proposta é o EcoAlert, um dashboard de monitoramento urbano para identificar,
    prever e priorizar pontos de descarte irregular.

    Fluxo de funcionamento:
        1. Coleta: sensores IoT, registros de equipes de campo e denúncias de moradores
           por aplicativo enviam dados de volume, foto, data, localização e tipo de resíduo.
        2. Processamento: o sistema armazena os dados, calcula a tendência de crescimento
           e classifica o risco de cada ponto com base no volume e na velocidade de acúmulo.
        3. Ação: quando o volume atinge 80% do limite crítico, o sistema gera uma Ordem de
           Serviço para limpeza preventiva e destaca o ponto no dashboard da prefeitura.

    Requisitos funcionais principais:
        RF01 - Registrar denúncias com foto, localização e tipo de resíduo.
        RF02 - Exibir mapa ou painel com pontos críticos de descarte.
        RF03 - Calcular previsão de crescimento do volume de lixo.
        RF04 - Gerar alerta quando o ponto se aproximar do limite crítico.
        RF05 - Priorizar ordens de limpeza conforme risco ambiental e urbano.

    Arquitetura lógica simplificada:
        Aplicativo cidadão / sensores -> API -> banco de dados -> módulo preditivo ->
        dashboard urbano -> ordem de serviço para equipe de limpeza.

    Relação com Engenharia de Software:
    O projeto aplica levantamento de requisitos, modelagem de dados, análise preditiva,
    automação de processos, priorização de demandas e desenvolvimento de uma solução
    digital orientada a um problema urbano real. Também permite evolução por metodologia
    ágil, com entregas incrementais como denúncias, dashboard, alertas e integração com
    equipes de limpeza.
    """
    print(relatorio)
    with open('relatorio_final.txt', 'w') as f:
        f.write(relatorio)

if __name__ == "__main__":
    gerar_relatorio()
