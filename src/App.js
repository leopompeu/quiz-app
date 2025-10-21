import React, { useState } from 'react';
import Quiz from './components/Quiz';
import lumiaLogo from './assets/lumia-ico.webp';
import './App.css';

const quizData = [
  {
    id: 1,
    question: "Quanto tempo demora para realizar um laudo moderno para a sua estratégia jurídica?",
    options: [
      "03 dias se realizado por um advogado",
      "10 dias se for realizado por um estagiário",
      "Automaticamente",
      "Não sei o que seria um laudo moderno"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Quem faz a estudo de jurisprudência mais rápida?",
    options: [
      "70 estagiários",
      "10 advogados",
      "Lum.IA",
      "Capivara"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "O que é Jurisprudência?",
    options: [
      "Conjunto de decisões e interpretações reiteradas dos tribunais sobre um mesmo assunto legal. Funciona como um guia para futuras decisões, buscando a uniformidade e a coerência na aplicação da lei em casos semelhantes.",
      "Formalização de um conjunto de decisões. É uma forma de consolidar e resumir o entendimento do tribunal, tornando-o mais acessível e previsível.",
      "Conjunto de obras e estudos de juristas sobre o direito.",
      "Decisão judicial específica e individual que pode ser usada como exemplo ou fundamento para casos futuros semelhantes."
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "O que é Jurimetria?",
    options: [
      "Ferramenta tecnológica.",
      "Análise qualitativa, que se aprofunda nos detalhes e na narrativa de um caso.",
      "Avaliação de dados passados para fazer análises preditivas sobre o comportamento do judiciário, trazendo previsão assertiva da decisão judicial de um caso individual.",
      "Aplicação de métodos estatísticos e quantitativos ao direito para analisar dados legais, como decisões judiciais, com o objetivo de identificar padrões e prever tendências."
    ],
    correctAnswer: 3
  },
  {
    id: 5,
    question: "Como a IA ajuda a área jurídica?",
    options: [
      "Não ajuda, na verdade é um trabalho adicional uma vez que é importante revisar os dados resultantes da tecnologia.",
      "Automatizar tarefas repetitivas, otimizar a pesquisa e análise de documentos, prever resultados de casos e oferecer acesso mais democrático à justiça. Ela aumenta a eficiência, a precisão e a produtividade de advogados, escritórios e até mesmo do Poder Judiciário.",
      "A IA está vindo como uma grande oportunidade de automatização das atividades e com o tempo, acabará com as atividades dos advogados.",
      "Automatizar tarefas repetitivas, otimizar a pesquisa e análise de documentos, subir petições nos tribunais de forma automática e correção dos textos, o que já facilita muito o trabalho do advogado."
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Qual foi o volume de novos processos distribuídos em 2022?",
    options: [
      "31,5 milhões",
      "40,3 milhões",
      "15,5 milhões",
      "27,6 milhões"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Quantos advogados tem no Brasil?",
    options: [
      "1.275.985 advogados formados",
      "2.015.198 advogados formados",
      "1.427.845 advogados formados",
      "943.785 advogados formados"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Quais são os diferenciais do Lum.IA?",
    options: [
      "Captura de iniciais, envio de petições ao tribunal, controle de custos.",
      "Captura de iniciais, controle de distribuição das iniciais por advogado do escritório, geração de relatório de petições.",
      "Captura de iniciais antes da citação, cadastro e leitura da petição por IA e distribuição dos ações e audiências por advogado.",
      "Captura de iniciais antes da citação, cadastro e leitura da petição por IA com jurisprudência e jurimetria do pleito, emissão de laudo técnico e controle de custos."
    ],
    correctAnswer: 3
  },
  {
    id: 9,
    question: "Qual é o país que lidera o ranking de processos trabalhistas no mundo?",
    options: [
      "EUA",
      "Alemanha",
      "Brasil",
      "França"
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Quais são os Top 3 tribunais com o maior volume de processos no Brasil?",
    options: [
      "São Paulo, Rio de Janeiro e Minas Gerais",
      "São Paulo, Rio de Janeiro e Rio Grande do Sul",
      "São Paulo, Minas Gerais e Rio Grande do Sul",
      "Rio de Janeiro, Minas Gerais e Rio Grande do Sul"
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "Qual é o percentual de tribunais acessados pela Lum.IA na captura de iniciais?",
    options: [
      "90%",
      "99%",
      "89%",
      "92%"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Qual é a média de tempo investido pelos advogados na busca de iniciais?",
    options: [
      "Sem a Lum.IA 1 dia inteiro acessando os tribunais",
      "Com a Lum.IA 90 minutos",
      "Com a Lum.IA 30 minutos",
      "Sem a Lum.IA, pelo menos, meio período, todos os dias, são investidos no acesso aos tribunais"
    ],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "Qual é a principal função do Poder Judiciário no Brasil?",
    options: [
      "Criar leis",
      "Julgar e aplicar as leis",
      "Fiscalizar o Executivo",
      "Elaborar o orçamento público"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "A Constituição Federal brasileira foi promulgada em:",
    options: [
      "1985",
      "1987",
      "1988",
      "Não sei, só sei quem matou a Odete Roitman"
    ],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "O Supremo Tribunal Federal (STF) tem como principal função:",
    options: [
      "Julgar crimes comuns",
      "Elaborar leis federais",
      "Guardar a Constituição",
      "Representar o Congresso Nacional"
    ],
    correctAnswer: 2
  },
  {
    id: 16,
    question: "Qual é a instância máxima da Justiça do Trabalho?",
    options: [
      "Tribunal Superior Eleitoral",
      "Tribunal Superior do Trabalho",
      "Superior Tribunal de Justiça",
      "Supremo Tribunal Federal"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "O Ministério Público tem a função de:",
    options: [
      "Defender o Estado",
      "Propor leis",
      "Fiscalizar a aplicação da lei e defender a sociedade",
      "Julgar recursos"
    ],
    correctAnswer: 2
  },
  {
    id: 18,
    question: "O que significa 'ação civil pública'?",
    options: [
      "Processo criminal contra servidor público",
      "Ação movida pelo Estado para arrecadar impostos",
      "Ação judicial para proteger interesses coletivos ou difusos",
      "Ação proposta para anular atos administrativos"
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    question: "A quem compete legislar sobre direito civil, comercial e penal?",
    options: [
      "Odete Roitman",
      "Estados",
      "União",
      "Distrito Federal"
    ],
    correctAnswer: 2
  },
  {
    id: 20,
    question: "No processo judicial, o autor é:",
    options: [
      "Quem julga o caso",
      "Quem propõe a ação",
      "Só sei que não fui eu",
      "O defensor público"
    ],
    correctAnswer: 1
  },
  {
    id: 21,
    question: "O habeas corpus é utilizado para:",
    options: [
      "Proteger o direito de propriedade",
      "Garantir a liberdade de locomoção",
      "Defender direitos trabalhistas",
      "Deixar a Odete Roitman sair do país"
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "Qual é o prazo para o Presidente da República sancionar ou vetar uma lei aprovada pelo Congresso Nacional?",
    options: [
      "Não sei, só sei que, normalmente está atrasado",
      "10 dias",
      "15 dias úteis",
      "15 dias corridos"
    ],
    correctAnswer: 3
  },
  {
    id: 23,
    question: "O princípio da presunção de inocência significa que:",
    options: [
      "O réu é culpado até provar o contrário",
      "Ninguém pode ser preso antes do trânsito em julgado da sentença",
      "Todos são inocentes, independentemente das provas",
      "O Ministério Público não precisa provar a culpa"
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    question: "Qual é o tribunal responsável por uniformizar a interpretação da lei federal no Brasil?",
    options: [
      "STF",
      "STJ",
      "TST",
      "TRF"
    ],
    correctAnswer: 1
  },
  {
    id: 25,
    question: "A súmula vinculante é um instrumento que:",
    options: [
      "Cria novas leis",
      "Obriga os juízes a seguir o entendimento do STF",
      "Revoga decisões judiciais anteriores",
      "Serve apenas para casos trabalhistas"
    ],
    correctAnswer: 1
  },
  {
    id: 26,
    question: "O Código Civil brasileiro entrou em vigor em:",
    options: [
      "1973",
      "1988",
      "2002",
      "2010"
    ],
    correctAnswer: 2
  },
  {
    id: 27,
    question: "Em uma ação judicial, o prazo para o réu apresentar contestação é geralmente de:",
    options: [
      "5 dias",
      "10 dias",
      "15 dias úteis",
      "30 dias corridos"
    ],
    correctAnswer: 2
  },
  {
    id: 28,
    question: "O princípio da publicidade nos atos processuais significa que:",
    options: [
      "Todo processo deve ser sigiloso",
      "As partes podem divulgar informações falsas",
      "Os atos processuais devem ser públicos, salvo exceções",
      "Apenas o juiz tem acesso aos autos"
    ],
    correctAnswer: 2
  },
  {
    id: 29,
    question: "O direito do trabalho regula:",
    options: [
      "As relações entre Estado e cidadãos",
      "As relações entre empregadores e empregados",
      "Os contratos de compra e venda",
      "Os direitos de propriedade intelectual"
    ],
    correctAnswer: 1
  },
  {
    id: 30,
    question: "Quem pode propor uma Ação Direta de Inconstitucionalidade (ADI)?",
    options: [
      "Qualquer cidadão",
      "Apenas o Presidente da República",
      "O Presidente, o PGR, governadores, mesas legislativas e entidades de classe",
      "Somente o STF"
    ],
    correctAnswer: 2
  },
  {
    id: 31,
    question: "O Tribunal de Contas da União (TCU) tem como principal função:",
    options: [
      "Julgar causas penais",
      "Fiscalizar a aplicação dos recursos públicos",
      "Julgar servidores federais",
      "Elaborar leis orçamentárias"
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    question: "O Estatuto da Advocacia (Lei nº 8.906/1994) regula:",
    options: [
      "Preciso mesmo saber isso?",
      "O exercício da profissão de advogado e a OAB",
      "A atuação dos magistrados",
      "As regras processuais civis"
    ],
    correctAnswer: 1
  }
];

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
  };

  if (!quizStarted) {
    return (
      <div className="app">
        <div className="hero-section">
          <div className="hero-content">
            <div className="lumia-logo">
              <img src={lumiaLogo} alt="Lumia Logo" className="lumia-logo-img" />
              <div className="logo-content">
                <h1 className="logo-text">Lum.IA</h1>
                <div className="logo-subtitle">Quiz Interativo</div>
              </div>
            </div>
            <h1 className="hero-title">
              Transforme seu conhecimento com nosso <span className="highlight">sistema de quiz</span>
            </h1>
            <p className="hero-description">
              Teste seus conhecimentos com o sistema interativo Lumia. 
              Aprenda de forma divertida e eficiente com feedback instantâneo e tecnologia de ponta.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={startQuiz}>
                Começar Quiz
              </button>
              <button className="btn-secondary">
                Conhecer Lumia
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="quiz-mockup">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="mockup-content">
                <div className="mockup-question">Pergunta 1 de 32</div>
                <div className="mockup-options">
                  <div className="mockup-option"></div>
                  <div className="mockup-option"></div>
                  <div className="mockup-option"></div>
                  <div className="mockup-option"></div>
                </div>
                <div className="mockup-timer">⏱️ 30s</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Quiz 
        questions={quizData} 
        onReset={resetQuiz}
      />
    </div>
  );
}

export default App;