import './index.css'

export default function Choices(props) {
  

  return (
    <div id='choiceButtons'>
      <button id='btn-Aprendeu' onClick={() => props.handle(1)}>Já aprendi sobre isso</button>
      <button id='btn-NaoAprendeu' onClick={() => props.handle(2)}>Não tenho a menor ideia</button>
      <button id='btn-Pular' onClick={() => props.handle(3)}>Pular Pergunta</button>
    </div>
  )
}


