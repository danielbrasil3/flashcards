import './index.css'

export default function Choices(props) {
  

  return (
    <div id='choiceButtons'>
      <button id='btn-Aprendeu' onClick={props.handle}>Já aprendi sobre isso</button>
      <button id='btn-NaoAprendeu' onClick={props.handle}>Não tenho a menor ideia</button>
      <button id='btn-Pular' onClick={props.handle}>Pular Pergunta</button>
    </div>
  )
}


