import React, { useState } from "react";

const Header = (props) => <h2>{props.heading}</h2>;

const StatisticLine = (props) => {
  return (
    <div>
      {props.text} :  {props.value}
    </div>
  )
}

const Statistics = (props) => {
  // console.log(Object.keys(props).length);
  let all;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <StatisticLine text="Good" value={props.good} />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine text="Neutral" value={props.neutral} />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine text="Bad" value={props.bad} />
          </td>
        </tr>
        <tr>
          <td>
            All : {all = props.good + props.neutral + props.bad}
          </td>
        </tr>
        <tr>
          <td>
            Average : {all / Object.keys(props).length}
          </td>
        </tr>
        <tr>
          <td>
            Positive : {props.good / all * 100}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <Header heading={"Give feedback"} />
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <h3>Statistics</h3>
      {
        good === 0 && neutral === 0 && bad === 0 ?
          <div>
            <h5>No feedback given</h5>
          </div>
          :
          <Statistics good={good} bad={bad} neutral={neutral} />
      }
    </div>
  )

}
export default App;
