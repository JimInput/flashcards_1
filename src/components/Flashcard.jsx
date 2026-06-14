import './Flashcard.css'
import physicsQuestions from '../data/physicsQuestions.json'
import { useState } from 'react'

const Flashcard = () => {
    const [question, setQuestion] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const current = physicsQuestions[question];

    const handleButton = () => {
        setShowAnswer(false);
        setQuestion((prev) => Math.floor(Math.random() * 10));
    }

    const handleCardFlip = () => {
        setShowAnswer((prev) => !prev);
    }

    return (
        <div className="container">
            <div className="card-outer" onClick={handleCardFlip}>
                <div className={`card ${current.difficulty} ${showAnswer ? 'flipped' : ''}`}>
                    <div className="card-face card-front">
                        <h3>{current.question}</h3>
                        {current.image && <img src={current.image}/>}
                    </div>
                    <div className="card-face card-back">
                        <h3>{current.answer}</h3>
                    </div>
                </div>
            </div>
            <button onClick={handleButton}>→</button>
        </div>
    )
}

export default Flashcard;