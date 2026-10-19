
import { useState } from 'react'

export default function Analysis() {
  const [amount, setAmount] = useState('50000')
  const [years, setYears] = useState('5')
  const [rate, setRate] = useState('12')
  const [inflation, setInflation] = useState('6')
  const [results, setResults] = useState(null)

  const money = value =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)

  function analyseInvestment() {
    const p = Number(amount)
    const n = Number(years)
    const r = Number(rate)
    const i = Number(inflation)

    // Validate all values before calculating.
    if (
      amount.trim() === '' ||
      years.trim() === '' ||
      rate.trim() === '' ||
      inflation.trim() === '' ||
      !Number.isFinite(p) ||
      !Number.isFinite(n) ||
      !Number.isFinite(r) ||
      !Number.isFinite(i) ||
      p <= 0 ||
      !Number.isInteger(n) ||
      n < 1 ||
      n > 100 ||
      r < 0 ||
      r > 100 ||
      i < 0 ||
      i > 100
    ) {
      alert(
        'Enter a positive investment, whole years from 1 to 100, and return and inflation rates from 0% to 100%.'
      )
      return
    }

    // Compound annual growth formula.
    const calculateFutureValue = annualRate =>
      p * Math.pow(1 + annualRate / 100, n)

    const conservativeRate = Math.max(0, r - 3)
    const optimisticRate = r + 3

    const conservative = calculateFutureValue(conservativeRate)
    const expected = calculateFutureValue(r)
    const optimistic = calculateFutureValue(optimisticRate)

    // Convert the future amount into today's purchasing power.
    const realValue = expected / Math.pow(1 + i / 100, n)

    setResults({
      invested: p,
      years: n,
      rate: r,
      inflation: i,
      conservativeRate,
      optimisticRate,
      conservative,
      expected,
      optimistic,
      expectedGain: expected - p,
      realValue,
      purchasingPowerLoss: expected - realValue,
    })
  }

  return (
    <section className="page">
      <p className="eyebrow">FINANCIAL INTELLIGENCE</p>
      <h1>Analysis Lab</h1>
      <p className="muted">
        Explore investment forecasts, compare possible returns, and understand
        the impact of inflation on future purchasing power.
      </p>

      <div className="calculator">
        <h2>Investment Forecast</h2>

        <div className="input-group">
          <label htmlFor="analysisAmount">
            Lump Sum Investment (₹)
          </label>
          <input
            id="analysisAmount"
            type="number"
            min="1"
            step="any"
            required
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="analysisYears">
            Investment Duration (Years)
          </label>
          <input
            id="analysisYears"
            type="number"
            min="1"
            max="100"
            step="1"
            required
            value={years}
            onChange={e => setYears(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="analysisRate">
            Expected Annual Return (%)
          </label>
          <input
            id="analysisRate"
            type="number"
            min="0"
            max="100"
            step="0.1"
            required
            value={rate}
            onChange={e => setRate(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="analysisInflation">
            Assumed Annual Inflation (%)
          </label>
          <input
            id="analysisInflation"
            type="number"
            min="0"
            max="100"
            step="0.1"
            required
            value={inflation}
            onChange={e => setInflation(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={analyseInvestment}
        >
          Analyse Investment
        </button>

        {results && (
          <div className="results">
            <h2>Forecast Results</h2>

            <div className="result-card">
              <p>Estimated Future Value</p>
              <strong className="result-value">
                {money(results.expected)}
              </strong>
              <p>
                Estimated growth: {money(results.expectedGain)}
              </p>
            </div>

            <div className="result-row">
              <span>Initial Investment</span>
              <strong>{money(results.invested)}</strong>
            </div>

            <div className="result-row">
              <span>Investment Duration</span>
              <strong>{results.years} years</strong>
            </div>

            <div className="result-row">
              <span>Expected Annual Return</span>
              <strong>{results.rate}%</strong>
            </div>

            <h3>Scenario Comparison</h3>
            <p className="muted">
              The following scenarios assume different constant annual returns.
            </p>

            <div className="result-row">
              <span>
                Conservative ({results.conservativeRate}%)
              </span>
              <strong>{money(results.conservative)}</strong>
            </div>

            <div className="result-row">
              <span>Expected ({results.rate}%)</span>
              <strong>{money(results.expected)}</strong>
            </div>

            <div className="result-row">
              <span>
                Optimistic ({results.optimisticRate}%)
              </span>
              <strong>{money(results.optimistic)}</strong>
            </div>

            <h3>Inflation Impact</h3>

            <div className="result-row">
              <span>Future Value Before Inflation</span>
              <strong>{money(results.expected)}</strong>
            </div>

            <div className="result-row">
              <span>Assumed Annual Inflation</span>
              <strong>{results.inflation}%</strong>
            </div>

            <div className="result-card">
              <p>Estimated Purchasing Power in Today's Money</p>
              <strong className="result-value">
                {money(results.realValue)}
              </strong>
              <p>
                Difference due to inflation: {
                  money(results.purchasingPowerLoss)
                }
              </p>
            </div>

            <p className="muted">
              These figures are hypothetical estimates, not guaranteed returns.
              The model assumes annual compounding at a constant return and
              constant inflation rate. Actual investment performance, inflation,
              taxes, and fees may differ.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
