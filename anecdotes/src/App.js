import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [selected, setSelected] = useState(0)
  const [Number, setNumber] = useState([0, 0, 0, 0, 0, 0, 0])
  const Randomfunc = () => {
    const x = Math.ceil(Math.random() * (anecdotes.length))
    console.log(x)
    setSelected(x - 1)
  }
  const Votefunc = () => {
    const newarray = { ...Number }
    newarray[selected] = newarray[selected] + 1
    setNumber(newarray)
  }
  var entries = { ...Number }
  var arr = Object.values(entries)
  const z = arr.indexOf(Math.max(...arr))
  return (
    <div>
      <h2>Anecdote of the Day </h2>
      <h3>{anecdotes[selected]} has {Number[selected]} votes</h3>
      <br />
      <button onClick={Votefunc}> votes </button>
      <button onClick={Randomfunc}>next anecdote </button>
      <br />
      <h3>Anecdote with most votes</h3>
      <h4>{anecdotes[z]}</h4>
    </div>
  )
}

export default App