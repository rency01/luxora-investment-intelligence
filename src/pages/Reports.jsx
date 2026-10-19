
import { useState } from 'react'

export default function Reports() {
  const [amount, setAmount] = useState('50000')
  const [rate, setRate] = useState('12')
  const [years, setYears] = useState('5')
  const [result, setResult] = useState(null)

  function generateReport() {
    const p = Number(amount)
    const r = Number(rate)
    const n = Number(years)

    if (amount === '' || rate === '' || years === '' ||
        p <= 0 || r < 0 || n <= 0) {
      alert('Please enter valid investment details.')
      return
    }

    const futureValue = p * Math.pow(1 + r / 100, n)

    setResult({
      amount: p,
      rate: r,
      years: n,
      futureValue,
      profit: futureValue - p,
    })
  }

  const money = value =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(value)

  function downloadReport() {
    if (!result) {
      alert('Generate the report first.')
      return
    }

    const content = [
      'Luxora Investment Report',
      `Investment Amount,${result.amount}`,
      `Annual Return (%),${result.rate}`,
      `Duration (Years),${result.years}`,
      `Estimated Future Value,${result.futureValue.toFixed(2)}`,
      `Estimated Profit,${result.profit.toFixed(2)}`,
    ].join('\n')

    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Luxora-Report.csv'
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section className="page">
      <p className="eyebrow">REPORTING CENTRE</p>
      <h1>Reports</h1>
      <p className="muted">Generate and export your investment summary.</p>

      <div className="calculator">
        <div className="input-group">
          <label htmlFor="reportAmount">Investment Amount (₹)</label>
          <input
            id="reportAmount"
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="reportRate">Expected Annual Return (%)</label>
          <input
            id="reportRate"
            type="number"
            value={rate}
            onChange={e => setRate(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="reportYears">Duration (Years)</label>
          <input
            id="reportYears"
            type="number"
            value={years}
            onChange={e => setYears(e.target.value)}
          />
        </div>

        <button type="button" onClick={generateReport}>
          Generate Report
        </button>

        {result && (
          <div className="results">
            <h2>Investment Summary</h2>
            <p>Amount Invested: <strong>{money(result.amount)}</strong></p>
            <p>Annual Return: <strong>{result.rate}%</strong></p>
            <p>Duration: <strong>{result.years} years</strong></p>
            <p>Estimated Future Value: <strong>{money(result.futureValue)}</strong></p>
            <p>Estimated Profit: <strong>{money(result.profit)}</strong></p>
            <p className="muted">Returns are estimates, not guaranteed.</p>

            <button type="button" onClick={() => window.print()}>
              Print / Save as PDF
            </button>

            <button type="button" onClick={downloadReport}>
              Download CSV
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
