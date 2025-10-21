# Lumia Quiz System

Sistema de quiz interativo desenvolvido para Lumia, com 30 perguntas em lorem ipsum. Uma plataforma moderna e tecnológica que oferece experiência de usuário fluida com timer, barra de progresso, feedback instantâneo e resultados detalhados.

## 🚀 Funcionalidades

- **Interface Moderna**: Design dark mode com gradientes e efeitos visuais
- **Timer Inteligente**: Contador regressivo com alertas visuais
- **Barra de Progresso**: Acompanhamento visual do progresso
- **Feedback Instantâneo**: Respostas corretas/incorretas com explicações
- **Navegação Flexível**: Botões anterior/próxima para navegação
- **Resultados Detalhados**: Análise completa do desempenho
- **Responsivo**: Adaptado para desktop e mobile

## 📦 Instalação

1. **Clone o repositório**:
   ```bash
   git clone <url-do-repositorio>
   cd quiz-system
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute o projeto**:
   ```bash
   npm start
   ```

4. **Acesse no navegador**:
   ```
   http://localhost:3000
   ```

## 🎯 Como Usar

1. **Tela Inicial**: Clique em "Começar Quiz" para iniciar o quiz Lumia
2. **Respondendo**: Selecione uma das opções disponíveis (30 perguntas)
3. **Feedback**: Veja a resposta correta e explicação em lorem ipsum
4. **Navegação**: Use os botões para navegar entre perguntas
5. **Resultados**: Visualize sua pontuação e análise detalhada do Lumia

## 🛠️ Estrutura do Projeto

```
src/
├── components/
│   ├── Quiz.js          # Componente principal do quiz
│   ├── Question.js       # Componente de pergunta
│   ├── Score.js          # Tela de resultados
│   ├── ProgressBar.js    # Barra de progresso
│   ├── Timer.js          # Timer do quiz
│   └── *.css             # Estilos dos componentes
├── App.js                # Componente raiz
├── App.css               # Estilos globais
├── index.js              # Ponto de entrada
└── index.css             # Estilos base
```

## 🎨 Personalização

### Adicionando Novas Perguntas

Edite o array `quizData` no arquivo `src/App.js` (atualmente com 30 perguntas em lorem ipsum):

```javascript
const quizData = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    options: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor",
      "Ut labore et dolore magna"
    ],
    correctAnswer: 0, // Índice da resposta correta (0-3)
    explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];
```

### Personalizando Estilos

- **Cores**: Modifique as variáveis CSS nos arquivos `.css`
- **Tempo**: Altere o valor `30` no componente `Quiz.js`
- **Layout**: Ajuste os estilos nos arquivos CSS correspondentes

## 📱 Responsividade

O sistema é totalmente responsivo e se adapta a:
- **Desktop**: Layout completo com sidebar
- **Tablet**: Layout adaptado
- **Mobile**: Layout otimizado para telas pequenas

## 🔧 Tecnologias Utilizadas

- **React 18**: Biblioteca principal
- **CSS3**: Estilização moderna com gradientes
- **JavaScript ES6+**: Funcionalidades modernas
- **HTML5**: Estrutura semântica

## 📈 Funcionalidades Avançadas

- **Sistema de Pontuação**: Cálculo automático de acertos
- **Análise de Tempo**: Tempo médio por pergunta
- **Feedback Educativo**: Explicações detalhadas
- **Navegação Intuitiva**: Controles fáceis de usar
- **Animações Suaves**: Transições fluidas

## 🚀 Deploy

Para fazer deploy do projeto:

```bash
npm run build
```

Os arquivos de produção estarão na pasta `build/`.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através dos canais disponíveis.
