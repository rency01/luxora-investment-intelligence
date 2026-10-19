
import { useState } from 'react'

export default function GoalPlanner() {
  const [goalName, setGoalName] = useState('')
  const [target, setTarget] = useState('')
  const [years, setYears] = useState('5')
  const [rate, setRate] = useState('12')
  const [result, setResult] = useState(null)

  function calculateGoal() {
    const goalAmount = Number(target)
    const duration = Number(years)
    const annualRate = Number(rate)

    if (
      !goalName.trim() || target === '' || years === '' || rate === '' ||
      goalAmount <= 0 || duration <= 0 || annualRate < 0
    ) {
      alert('Please enter valid goal details.')
      return
    }

    const futureValue = goalAmount
    const presentValue =
      futureValue / Math.pow(1 + annualRate / 100, duration)

    setResult({
      name: goalName.trim(),
      target: goalAmount,
      years: duration,
      rate: annualRate,
      presentValue,
      gap: futureValue - presentValue,
    })
  }

  const money = value =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(value)

  return (
    <section className="page">
      <p className="eyebrow">FINANCIAL GOALS</p>
      <h1>Goal Planner</h1>
      <p className="muted">
        Turn your future financial goals into an investment plan.
      </p>

      <div className="calculator">
        <h2>Plan Your Financial Goal</h2>

        <div className="input-group">
          <label htmlFor="goalName">Goal Name</label>
          <input
            id="goalName"
            value={goalName}
            onChange={e => setGoalName(e.target.value)}
            placeholder="e.g. Buy a car"
          />
        </div>

        <div className="input-group">
          <label htmlFor="target">Future Target Amount (₹)</label>
          <input
            id="target"
            type="number"
            min="1"
            value={target}
            onChange={e => setTarget(e.target.value)}
            placeholder="e.g. 1000000"
          />
        </div>

        <div className="input-group">
          <label htmlFor="goalYears">Time to Reach Goal (Years)</label>
          <input
            id="goalYears"
            type="number"
            min="1"
            max="100"
            value={years}
            onChange={e => setYears(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="goalRate">Expected Annual Return (%)</label>
          <input
            id="goalRate"
            type="number"
            min="0"
            max="100"
            step="0.1"
            value={rate}
            onChange={e => setRate(e.target.value)}
          />
        </div>

        <button type="button" onClick={calculateGoal}>
          Calculate Goal Plan
        </button>

        {result && (
          <div className="results">
            <h2>Your Goal Summary</h2>
            <p>Goal: <strong>{result.name}</strong></p>
            <p>Target Amount: <strong>{money(result.target)}</strong></p>
            <p>Time Available: <strong>{result.years} years</strong></p>
            <p>Assumed Annual Return: <strong>{result.rate}%</strong></p>
            <p>Estimated Lump Sum Needed Today: <strong>{money(result.presentValue)}</strong></p>
            <p className="muted">
              This estimates a one-time investment today, compounded annually.
              Actual returns may differ, and the target is not guaranteed.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
