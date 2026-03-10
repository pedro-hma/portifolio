const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

export default function HangmanKeyboard({
  guessed,
  onGuess,
  disabled
}:{
  guessed:string[]
  onGuess:(l:string)=>void
  disabled:boolean
}) {

  return (

    <div className="keyboard">

      {letters.map(letter => (

        <button
          key={letter}
          onClick={()=>onGuess(letter)}
          disabled={guessed.includes(letter) || disabled}
        >
          {letter}
        </button>

      ))}

    </div>
  )
}