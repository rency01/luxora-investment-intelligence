
import { useState } from 'react'

export default function Calculator() {
  const [amount, setAmount] = useState('10000')
  const [rate, setRate] = useState('12')
  const [years, setYears] = useState('5')
  const [result, setResult] = useState(null)

  function calculate() {
    const principal = Number(amount)
    const annualRate = Number(rate)
    const duration = Number(years)

    if (
      amount === '' || rate === '' || years === '' ||
      principal <= 0 || annualRate < 0 || duration <= 0
    ) {
      alert('Enter a valid investment amount, return rate, and duration.')
      return
    }

    const futureValue =
      principal * Math.pow(1 + annualRate / 100, duration)

    setResult({
      invested: principal,
      value: futureValue,
      profit: futureValue - principal,
    })
  }

  const money = (value) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(value)

  return (
    <section className="page">
      <p className="eyebrow">INVESTMENT TOOL</p>
      <h1>Lumpsum Calculator</h1>
      <p className="muted">
        Estimate how your one-time investment could grow over time.
      </p>

      <div className="calculator">
        <div className="input-group">
          <label htmlFor="amount">Investment Amount (₹)</label>
          <input
            id="amount"
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>

        <div className="input-group">
          <label htmlFor="rate">Expected Annual Return (%)</label>
          <input
            id="rate"
            type="number"
            min="0"
            max="100"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter return rate"
          />
        </div>

        <div className="input-group">
          <label htmlFor="years">Investment Duration (Years)</label>
          <input
            id="years"
            type="number"
            min="1"
            max="100"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="Enter years"
          />
        </div>

        <button type="button" onClick={calculate}>
          Calculate Returns
        </button>

        {result !== null && (
          <div className="results">
            <h2>Investment Results</h2>
            <p>Amount Invested: <strong>{money(result.invested)}</strong></p>
            <p>Estimated Future Value: <strong>{money(result.value)}</strong></p>
            <p>Estimated Profit: <strong>{money(result.profit)}</strong></p>
            <p className="muted">
              This is an estimate, not a guaranteed investment return.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
