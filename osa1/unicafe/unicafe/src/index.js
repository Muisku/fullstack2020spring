import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, feedback }) => (
    <button onClick={handleClick}>
        {feedback}
    </button>
)


const Statistics = ({good, neutral, bad}) => {
    let all = good + neutral + bad
    let average = (good + (-1) * bad)/all
    let positive = good/all
    if (good > 0 | neutral > 0 | bad > 0) {  
return (
      <div>
    
            <Statistic text='good' data={good} /> 
            <Statistic text='neutral' data={neutral} />  
            <Statistic text='bad' data={bad} />  
            <Statistic text='all' data={all} />  
            <Statistic text='average' data={average} />  
            <Statistic text='positive' data={positive} />  
      </div>
    
    )}


return (
    <div>
        <p>No feedback</p>
        </div>
)
}
  
  const Statistic = ({text, data}) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{data}</td>
      </tr>
    )
  }

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
     <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} feedback='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} feedback='neutral'/>
      <Button handleClick={() => setBad(bad + 1)}feedback='bad'/>
        <h2>statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)