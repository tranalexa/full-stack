import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [clicks, setClicks] = useState(0)

  const goodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    const updatedTotal = total + 1
    setTotal(updatedTotal)
    const updatedClicks = clicks + 1
    setClicks(updatedClicks)
  }

  const neutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    const updatedClicks = clicks + 1
    setClicks(updatedClicks)
  }

  const badClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    const updatedTotal = total - 1
    setTotal(updatedTotal)
    const updatedClicks = clicks + 1
    setClicks(updatedClicks)
  }

  const StatisticLine = (props) => {
    return (
      <tr>
        <td>
          {props.text}
        </td>
        <td>
          {props.value}
        </td>
      </tr>
    )
  }

  const Statistics = (props) => {
    if (props.clicks == 0) {
      return(
        <div>
          <p>No feedback given</p>
        </div>
      )
    }
    return(
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine text="all" value={props.clicks} />
            <StatisticLine text="average" value={props.total/props.clicks} />
            <StatisticLine text="positive" value={props.good/props.clicks + '%'} />
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div>
      <Header text="give feedback" />
      <Button text="good" handleClick={goodClick}/>
      <Button text="neutral" handleClick={neutralClick}/>
      <Button text="bad" handleClick={badClick}/>
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} clicks={clicks}/>
    </div>
  )
}

export default App