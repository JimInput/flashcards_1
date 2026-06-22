import './Flashcard.css'
import { useState } from 'react'

const Flashcard = (props) => {
    const numCards = props.cards.length
    const [order, setOrder] = useState(Array.from({ length: numCards }, (_, i) => i)) // start in json order
    const [question, setQuestion] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const current = props.cards[question];

    const handleNext = () => {
        setShowAnswer(false);
        setQuestion((prev) => prev + 1 < numCards ? prev + 1 : prev);
        setAnswerInput('');
        setAnswerStatus('');
    }

    const handlePrev = () => {
        setShowAnswer(false);
        setQuestion((prev) => prev - 1 >= 0 ? prev - 1 : 0);
        setAnswerInput('');
        setAnswerStatus('');
    }

    const handleCardFlip = () => {
        setShowAnswer((prev) => !prev);
    }

    const [answerInput, setAnswerInput] = useState('');
    const [answerStatus, setAnswerStatus] = useState('');

    const handleAnswerChange = (e) => {
        setAnswerInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setAnswerStatus(answerInput === current.answer ? 'right' : 'wrong')
    }

    const atLastCard = () => question === numCards - 1;
    const atFirstCard = () => question === 0;

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
            <div className={`response ${answerStatus}`}>
                {(answerStatus === 'right') && <p>Correct!</p>}
                {(answerStatus === 'wrong') && <p>Incorrect!</p>}
            </div>
            <div className="answer">
                <p>Guess the answer here: </p>
                <form id="guess-form" onSubmit={handleSubmit}>
                    <input type="text" name="answer" value={answerInput} onChange={handleAnswerChange} />
                </form>
                <button className="guess-button" form="guess-form" type="submit">Submit Guess</button>
            </div>
            <div className="buttons">
                <button className="arrow" disabled={atFirstCard()} onClick={handlePrev}>←</button>
                <button className="arrow" disabled={atLastCard()} onClick={handleNext}>→</button>
            </div>
        </div>
    )
}

export default Flashcard;