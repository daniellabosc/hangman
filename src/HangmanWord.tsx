
type HangmanWordProps = {
    wordToGuess:string
    guessedLetters: []
}

const HangmanWord = ({wordToGuess, guessedLetters}: HangmanWordProps)=>{
    return (
        <div>
            <div className="container hangmanword">
                {wordToGuess.split("").map((letter, index)=>{
                 return   <span className="hangmanword__item" key={index}>
                            <span style={{
                                visibility: guessedLetters.includes(letter) ? "visible" : "hidden"
                            }}>
                            
                            {letter}
                            
                            </span>
                        </span>
                    })}
            </div>

        </div>
    )
}

export default HangmanWord