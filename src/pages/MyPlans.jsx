
import { useState } from 'react'

export default function MyPlans() {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [rate, setRate] = useState('12')
  const [years, setYears] = useState('5')
  const [plans, setPlans] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('luxoraPlans') || '[]')
    } catch {
      return []
    }
  })

  function savePlan() {
    const p = Number(amount)
    const r = Number(rate)
    const n = Number(years)

    if (!name.trim() || amount === '' || rate === '' || years === '' ||
        p <= 0 || r < 0 || n <= 0) {
      alert('Please enter a plan name and valid investment details.')
      return
    }

    const futureValue = p * Math.pow(1 + r / 100, n)

    const newPlan = {
      id: Date.now(),
      name: name.trim(),
      amount: p,
      rate: r,
      years: n,
      futureValue,
    }

    const updated = [...plans, newPlan]
    setPlans(updated)
    localStorage.setItem('luxoraPlans', JSON.stringify(updated))

    setName('')
    setAmount('')
  }

  function deletePlan(id) {
    const updated = plans.filter(plan => plan.id !== id)
    setPlans(updated)
    localStorage.setItem('luxoraPlans', JSON.stringify(updated))
  }

  const money = value =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(value)

  return (
    <section className="page">
      <p className="eyebrow">SAVED WORKSPACE</p>
      <h1>My Plans</h1>
      <p className="muted">
        Create and manage your investment scenarios.
      </p>

      <div className="calculator">
        <h2>Create an Investment Plan</h2>

        <div className="input-group">
          <label htmlFor="planName">Plan Name</label>
          <input
            id="planName"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="e.g. My Future Savings"
          />
        </div>

        <div className="input-group">
          <label htmlFor="planAmount">Investment Amount (₹)</label>
          <input
            id="planAmount"
            type="number"
            min="1"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>

        <div className="input-group">
          <label htmlFor="planRate">Expected Annual Return (%)</label>
          <input
            id="planRate"
            type="number"
            min="0"
            max="100"
            step="0.1"
            value={rate}
            onChange={e => setRate(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="planYears">Duration (Years)</label>
          <input
            id="planYears"
            type="number"
            min="1"
            max="100"
            value={years}
            onChange={e => setYears(e.target.value)}
          />
        </div>

        <button type="button" onClick={savePlan}>
          Save Investment Plan
        </button>
      </div>

      <div className="dashboard-panel">
        <h2>Your Saved Plans ({plans.length})</h2>

        {plans.length === 0 ? (
          <p className="muted">No plans saved yet. Create your first plan above.</p>
        ) : (
          plans.map(plan => (
            <article className="stat-card" key={plan.id}>
              <h3>{plan.name}</h3>
              <p>Invested: {money(plan.amount)}</p>
              <p>Expected return: {plan.rate}% per year</p>
              <p>Duration: {plan.years} years</p>
              <p>Estimated future value: <strong>{money(plan.futureValue)}</strong></p>
              <button type="button" onClick={() => deletePlan(plan.id)}>
                Delete Plan
              </button>
            </article>
          ))
        )}
      </div>
    </section>
  )
}
