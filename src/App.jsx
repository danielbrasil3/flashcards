import './App.css'
import Choices from './Choices'
import Questions from './questions'
import ProgressBar from './ProgressBar'

function App() {
  

  return (
    <>
      <h1>React Questions</h1>
      <h3>Test, rate and improve your React knowledge with these questions.</h3>

      <ProgressBar/>
      <Questions/>
      <Choices/>
    </>
  )
}

export default App
