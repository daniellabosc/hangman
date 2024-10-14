const keys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 'L', "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

type KeyboardProps = {
    guessedLetters: []
    onClick: MouseEvent
}

const Keyboard = ({guessedLetters, onClick}:KeyboardProps)=>{


    return (
        <div className="container keyboard" style={{wordWrap: "break-word"}}>
            
            {keys.map((letter, index)=>{

                return (
                    <button type="button"
                        className={guessedLetters.includes(letter) ? 'btn inactive' : 'btn active'}
                        key={index} onClick={()=>onClick(letter)}>
                        <span key={index} className="keyboard__letter">
                            {letter}
                        </span>
                    </button>
                )
            })}
        </div>
    )
}

export default Keyboard