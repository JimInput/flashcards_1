import './App.css'
import Header from './components/Header'
import Flashcard from './components/Flashcard'
import physicsQuestions from './data/physicsQuestions.json'

function App() {

  return (
    <div className="center">
      <Header title="Physics Study Cards" description="A set of cards for you to study Physics!" num={physicsQuestions.length}/>
      <Flashcard/>
    </div>
  )
}

export default App;
