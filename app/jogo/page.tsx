"use client"

import { useState, useEffect } from "react"
import HangmanFigure from "@/components/HangmanFigure"
import HangmanKeyboard from "@/components/HangmanKeyboard"

const words = [
  "REACT","NEXT","JAVASCRIPT","TYPESCRIPT","PROGRAMACAO",
  "ALGORITMO","DESENVOLVEDOR","INTERFACE","SERVIDOR",
  "CLIENTE","FRONTEND","BACKEND","COMPONENTE","VARIAVEL",
  "FUNCAO","ESTADO","ARRAY","OBJETO","LOOP","CONDICAO",
  "ESTRUTURA","CLASSE","METODO","HERANCA","POLIMORFISMO",
  "ENCAPSULAMENTO","COMPILADOR","SISTEMA","APLICACAO","PROJETO"
]

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}
export default function Game() {

  const [word, setWord] = useState(getWord())
  const [guessed, setGuessed] = useState<string[]>([])
  const [errors, setErrors] = useState(0)

  const maxErrors = 6

  const display = word
    .split("")
    .map(letter => guessed.includes(letter) ? letter : "_")
    .join(" ")

  const guess = (letter:string) => {

    if(guessed.includes(letter)) return

    setGuessed([...guessed, letter])

    if(!word.includes(letter)){
      setErrors(errors + 1)
    }
  }

  const win = !display.includes("_")
  const lose = errors >= maxErrors

  function restart(){
    setWord(getWord())
    setGuessed([])
    setErrors(0)
    useEffect(() => {
  function handleKey(e: KeyboardEvent) {
    const letter = e.key.toUpperCase()
    if(letter.match(/^[A-Z]$/)){
      guess(letter)
    }
  }
  window.addEventListener("keydown", handleKey)
  return () => {
    window.removeEventListener("keydown", handleKey)
  }
}, [guessed, word])
  }

  return (

    <main className="game-container">

      <h1>Jogo da Forca</h1>

      <HangmanFigure errors={errors} />

      <h2 className="word">{display}</h2>

      <HangmanKeyboard
        guessed={guessed}
        onGuess={guess}
        disabled={win || lose}
      />

      <p className="tries">
        Letras usadas: {guessed.join(", ")}
      </p>

      {win && <h3 className="win">🎉 Você venceu!</h3>}
      {lose && <h3 className="lose">❌ A palavra era {word}</h3>}

      <button onClick={restart} className="restart">
        Reiniciar
      </button>

    </main>
  )
}