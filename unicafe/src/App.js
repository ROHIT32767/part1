import { useState } from 'react'
const Statistics = (props) => {
  return (
    <div>
      <h3>statistics</h3>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.all} />
          <StatisticLine text="average" value={props.x} />
          <StatisticLine text="positive" value={props.y} />
        </tbody>
      </table>
    </div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick} >{props.text}</button>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td> {props.text} </td>
      <td>{props.value} </td>
    </tr>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const goodfunc = () => {
    setGood(good + 1)
  }
  const neutralfunc = () => {
    setNeutral(neutral + 1)
  }
  const badfunc = () => {
    setBad(bad + 1)
  }
  const all = good + neutral + bad
  const diff = good - bad
  const x = diff / all
  const y = (good * 100) / all

  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <table>
          <tbody>
            <tr>
              <td><Button onClick={goodfunc} text="good" /></td>
              <td><Button onClick={neutralfunc} text="neutral" /></td>
              <td><Button onClick={badfunc} text="bad" /></td>
            </tr>
          </tbody>
        </table>

      </div>
      {all > 0 && <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        x={x}
        y={y}
      />}
      {!all && <h3> No feedback Given </h3>}
    </div>
  )
}

export default App