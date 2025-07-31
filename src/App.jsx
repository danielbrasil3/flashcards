import './App.css'
import Choices from './Choices'
import Questions from './questions'
import ProgressBar from './ProgressBar'
import { useState } from 'react';

function App() {
  const [questions, setQuestions] = useState([
    {
      level: 'iniciante',
      question: 'O que é React?',
      answer: 'Uma biblioteca JavaScript para construir interfaces.',
    },
    {
      level: 'iniciante',
      question: 'O que são componentes em React?',
      answer: 'São blocos reutilizáveis de código que retornam elementos React (JSX).',
    },
    {
      level: 'iniciante',
      question: 'O que é JSX?',
      answer: 'Uma extensão de sintaxe para JavaScript que permite escrever HTML dentro do React.',
    },
    {
      level: 'iniciante',
      question: 'Como criar um componente funcional em React?',
      answer: 'Usando uma função JavaScript que retorna JSX.',
    },
    {
      level: 'intermediário',
      question: 'O que são Hooks em React?',
      answer: 'Funções que permitem usar estado e outros recursos do React em componentes funcionais.',
    },
    {
      level: 'intermediário',
      question: 'Para que serve o useState?',
      answer: 'Para declarar e controlar variáveis de estado em componentes funcionais.',
    },
    {
      level: 'intermediário',
      question: 'Para que serve o useEffect?',
      answer: 'Para lidar com efeitos colaterais como chamadas de API, timers ou manipulação do DOM.',
    },
    {
      level: 'intermediário',
      question: 'Qual a diferença entre props e state?',
      answer: 'Props são dados passados de pai para filho. State é interno e controlado pelo próprio componente.',
    },
    {
      level: 'avançado',
      question: 'O que é memoization em React?',
      answer: 'Uma técnica para evitar renderizações desnecessárias salvando resultados de cálculos.',
    },
    {
      level: 'avançado',
      question: 'Como otimizar a performance de um componente React?',
      answer: 'Usando memo, useCallback, useMemo e dividindo o código em partes menores.',
    },
    {
      level: 'avançado',
      question: 'O que é Context API?',
      answer: 'Uma forma de compartilhar dados entre componentes sem passar props manualmente em todos os níveis.',
    },
    {
      level: 'avançado',
      question: 'Como funciona o React Fiber?',
      answer: 'É o novo algoritmo de reconciliação do React que melhora a performance da renderização.',
    }
  ]);
  const [indexAtual, setIndexAtual] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNext = () => {
    setShowAnswer(false);
    setIndexAtual((prev) => (prev + 1) % questions.length);
  };

  

  return (
    <>
      <h1>React Questions</h1>
      <h3>Test, rate and improve your React knowledge with these questions.</h3>

      <ProgressBar/>
      <Questions questions={questions[indexAtual]} showAnswer={showAnswer} setShowAnswer={setShowAnswer}/>
      <Choices handle={handleNext}/>
    </>
  )
}

export default App
