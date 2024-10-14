import { useState } from 'react'
import './App.css'
import words from './wordsList.json'
import HangmanDrawing from './HangmanDrawing'
import HangmanWord from './HangmanWord'
import Keyboard from './Keyboard'

function App() {
const [wordToGuess] = useState<string>(()=>{
  return words[Math.floor(Math.random() * words.length)].toUpperCase()
})
const [guessedLetters, setGuessedLetters] = useState<string[]>([])
const incorrectLetters = guessedLetters.filter((letter)=>!wordToGuess.includes(letter))
const correctLetters = guessedLetters.filter((letter)=>wordToGuess.includes(letter))
const addGuessedLetter = (letter:string)=>{
  if(guessedLetters.includes(letter)) return
  setGuessedLetters((currentLetters)=>[...currentLetters, letter])
}


  return (
    <>
      <div className="hangman">
        <div className="hangman__status">
          <span>
            {correctLetters.length === wordToGuess.split("").length ? "YOU WIN!!" : null}
            {incorrectLetters.length >= 6 ? "YOU LOSE!!" : null}
          </span>
          <br/>
          <span>Refresh the page to play again</span>
        </div>
        <div className="hangman__container">
            <HangmanDrawing numberofGuesses={incorrectLetters.length} />
            <HangmanWord wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
        </div>
        <div className="keyboard__container">
            <Keyboard guessedLetters={guessedLetters} onClick={addGuessedLetter} />
        </div>
      </div>
     
    </>
  )
}

export default App
