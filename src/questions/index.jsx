import './index.css'

export default function Questions(props) {
  

  return (
    <div id='questionsContainer'>
        <p>{props.questions.level}</p>
        <span>{props.questions.question}</span>
        {props.showAnswer ? (
          <p id='answerText'>{props.questions.answer}</p>
        ) : (
          <button id='btn-Resposta' onClick={() => props.setShowAnswer(true)}>
            Clique para ver a resposta
          </button>
        )}
    </div>
  )
}


