export default function HangmanFigure({ errors }:{errors:number}) {

  return (
    <svg height="250" width="200">

      <line x1="10" y1="240" x2="150" y2="240" stroke="white" />
      <line x1="40" y1="240" x2="40" y2="20" stroke="white" />
      <line x1="40" y1="20" x2="120" y2="20" stroke="white" />
      <line x1="120" y1="20" x2="120" y2="50" stroke="white" />

      {errors > 0 && <circle cx="120" cy="70" r="20" stroke="white" fill="none"/>}
      {errors > 1 && <line x1="120" y1="90" x2="120" y2="150" stroke="white"/>}
      {errors > 2 && <line x1="120" y1="110" x2="90" y2="130" stroke="white"/>}
      {errors > 3 && <line x1="120" y1="110" x2="150" y2="130" stroke="white"/>}
      {errors > 4 && <line x1="120" y1="150" x2="90" y2="190" stroke="white"/>}
      {errors > 5 && <line x1="120" y1="150" x2="150" y2="190" stroke="white"/>}
    </svg>
  )
}