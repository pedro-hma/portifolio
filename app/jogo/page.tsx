"use client"
import { useState } from "react"
const words = [
  "REACT","NEXT","JAVASCRIPT","TYPESCRIPT","PROGRAMACAO",
  "ALGORITMO","DESENVOLVEDOR","INTERFACE","SERVIDOR",
  "CLIENTE","FRONTEND","BACKEND","COMPONENTE","VARIAVEL",
  "FUNCAO","ESTADO","ARRAY","OBJETO","LOOP","CONDICAO",
  "ESTRUTURA","CLASSE","METODO","HERANCA","POLIMORFISMO",
  "ENCAPSULAMENTO","COMPILADOR","SISTEMA","APLICACAO","PROJETO"
]
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}
export default function HangmanGame() {
  const [word, setWord] = useState(getRandomWord())
  const [guesses, setGuesses] = useState<string[]>([])
  const [errors, setErrors] = useState(0)
  const maxErrors = 6
  const guessedLetters = guesses.join("")
  const displayWord = word
    .split("")
    .map(letter => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ")
  const handleGuess = (letter: string) => {
    if (guesses.includes(letter)) return
    setGuesses([...guesses, letter])
    if (!word.includes(letter)) {
      setErrors(errors + 1)
    }
  }
  const isWin = !displayWord.includes("_")
  const isLose = errors >= maxErrors
  const restartGame = () => {
    setWord(getRandomWord())
    setGuesses([])
    setErrors(0)
  }
  return (
    <main className="container">
      <h1>Jogo da Forca</h1>
      <h2>{displayWord}</h2>
      <p>Erros: {errors} / {maxErrors}</p>
      <div className="keyboard">
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => (
          <button key={letter}onClick={() => handleGuess(letter)}disabled={guesses.includes(letter) || isWin || isLose}>{letter}</button>
        ))}
      </div>
      <p>Letras usadas: {guesses.join(", ")}</p>
      {isWin && (
        <div>
          <h3>🎉 Você venceu!</h3>
          <p>A palavra era: {word}</p>
        </div>
      )}
      {isLose && (
        <div>
          <h3>❌ Você perdeu!</h3>
          <p>A palavra era: {word}</p>
        </div>
      )}
      <button onClick={restartGame}>Reiniciar</button>
    </main>
  )
}