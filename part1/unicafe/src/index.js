import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const Statistic = props => (
    <div>
        {props.text} {props.value}
    </div>
)

const Statistics = ({good, neutral, bad}) => {
    if ((good + neutral + bad) == 0)
        return (
            <div>
                No feedback given.
            </div>
        )

    else
        return (
            <div>
                <table>
                    <td></td><Statistic text='good' value={good}/>
                    <td></td><Statistic text='neutral' value={neutral}/>
                    <td></td><Statistic text='bad' value={bad}/>
                    <td></td><Statistic text='all' value={good + bad + neutral}/>
                    <td></td><Statistic text='average' value={(good - bad) / (good + neutral + bad) }/>
                    <td></td><Statistic text='positive' value={((good ) / (good + neutral + bad)) * 100.0 + ' %'}/>
                </table>
            </div>
        )
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={() => setGood(good + 1)} text='good'/>
            <Button onClick={() => setNeutral(neutral + 1)} text='neutral'/>
            <Button onClick={() => setBad(bad + 1)} text='bad'/>
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

debugger

ReactDOM.render(<App />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
