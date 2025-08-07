import './index.css'

export default function ProgressBar(props) {


  return (
    <div id='progressBar'>
      <p>Respostas</p>
      <div>
        <p>Aprendeu: {props.choicesHistory.aprendeu.length} questões</p>
        <p>Não sabe: {props.choicesHistory.nao_sabe.length} questões</p>
        <p>Pulou: {props.choicesHistory.pulou.length} questões</p>
      </div>
      <progress value={props.porcentagem} max="100">{props.porcentagem}%</progress>
    </div>
  )
}


