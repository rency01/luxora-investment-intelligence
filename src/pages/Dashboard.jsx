
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  ChartNoAxesCombined,
  Wallet,
  TrendingUp,
  Landmark,
  Calculator,
  Target,
  FolderOpen,
  FileChartColumn,
  Sparkles,
  ShieldCheck,
} from 'lucide-react'

const stats = [
  {
    title: 'Total Invested',
    value: '₹0.00',
    description: 'Across all your plans',
    icon: Wallet,
    tone: 'navy',
    trend: 'Your investment capital',
  },
  {
    title: 'Estimated Returns',
    value: '₹0.00',
    description: 'Potential investment growth',
    icon: TrendingUp,
    tone: 'gold',
    trend: 'Based on your projections',
  },
  {
    title: 'Future Value',
    value: '₹0.00',
    description: 'Capital plus estimated returns',
    icon: Landmark,
    tone: 'green',
    trend: 'Your projected portfolio',
  },
]

const workspaceItems = [
  {
    title: 'Analysis Lab',
    description: 'Compare return scenarios and understand inflation.',
    to: '/analysis',
    icon: ChartNoAxesCombined,
    label: 'INVESTMENT INSIGHTS',
  },
  {
    title: 'Goal Planner',
    description: 'Plan your financial goals and future milestones.',
    to: '/goals',
    icon: Target,
    label: 'PLAN AHEAD',
  },
  {
    title: 'My Plans',
    description: 'Review and organise your investment plans.',
    to: '/plans',
    icon: FolderOpen,
    label: 'YOUR PORTFOLIO',
  },
  {
    title: 'Reports',
    description: 'Explore your investment summaries and reports.',
    to: '/reports',
    icon: FileChartColumn,
    label: 'FINANCIAL SUMMARY',
  },
]

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      {/* Welcome section */}
      <section className="dashboard-welcome">
        <div className="dashboard-welcome-content">
          <span className="dashboard-eyebrow">
            <Sparkles size={14} />
            YOUR FINANCIAL OVERVIEW
          </span>

          <h1>Welcome to Luxora.</h1>

          <p>
            A clearer perspective on your investments starts here.
            Plan thoughtfully, explore possibilities, and work towards
            your financial goals with confidence.
          </p>

          <div className="dashboard-welcome-actions">
            <Link to="/calculator" className="primary-button">
              <Calculator size={17} />
              Calculate Investment
              <ArrowRight size={16} />
            </Link>

            <Link to="/analysis" className="dashboard-text-link">
              Explore Analysis
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="dashboard-hero-art" aria-hidden="true">
          <div className="dashboard-orbit dashboard-orbit-one" />
          <div className="dashboard-orbit dashboard-orbit-two" />

          <div className="dashboard-hero-icon">
            <ChartNoAxesCombined size={46} strokeWidth={1.35} />
          </div>

          <div className="dashboard-hero-caption">
            <span>YOUR NEXT CHAPTER</span>
            <strong>Build with intention.</strong>
          </div>
        </div>
      </section>

      {/* Summary heading */}
      <section className="dashboard-section">
        <div className="dashboard-section-heading">
          <div>
            <p className="section-label">AT A GLANCE</p>
            <h2>Your investment snapshot</h2>
            <p className="dashboard-section-description">
              A quick overview of your investment figures.
            </p>
          </div>

          <span className="dashboard-period">
            <span className="dashboard-status-dot" />
            Personal workspace
          </span>
        </div>

        {/* Financial metric cards */}
        <div className="dashboard-stats">
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <article
                className={`stat-card dashboard-stat-${stat.tone}`}
                key={stat.title}
              >
                <div className="dashboard-stat-top">
                  <span className="dashboard-stat-icon">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>

                  <span className="dashboard-stat-menu">
                    <ArrowUpRight size={17} />
                  </span>
                </div>

                <p className="dashboard-stat-title">{stat.title}</p>

                <h2 className="dashboard-stat-value">{stat.value}</h2>

                <p className="dashboard-stat-description">
                  {stat.description}
                </p>

                <div className="dashboard-stat-footer">
                  <span>{stat.trend}</span>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Main call to action */}
      <section className="dashboard-investment-panel">
        <div className="dashboard-investment-content">
          <span className="dashboard-panel-icon">
            <Calculator size={21} />
          </span>

          <p className="section-label">YOUR NEXT STEP</p>

          <h2>Give your money a direction.</h2>

          <p>
            Start with a lump-sum amount, choose an expected annual
            return, and set your investment duration. Luxora will
            estimate your potential future value.
          </p>

          <Link to="/calculator" className="secondary-button">
            Open Investment Calculator
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="dashboard-investment-visual" aria-hidden="true">
          <div className="dashboard-visual-card">
            <div className="dashboard-visual-card-top">
              <span>INVESTMENT OUTLOOK</span>
              <TrendingUp size={18} />
            </div>

            <div className="dashboard-visual-placeholder">
              <span className="dashboard-visual-line dashboard-line-one" />
              <span className="dashboard-visual-line dashboard-line-two" />
              <span className="dashboard-visual-line dashboard-line-three" />
              <span className="dashboard-visual-line dashboard-line-four" />
              <span className="dashboard-visual-line dashboard-line-five" />
            </div>

            <div className="dashboard-visual-footer">
              <span>Plan today</span>
              <span>Grow over time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Workspace navigation */}
      <section className="dashboard-workspace">
        <div className="dashboard-section-heading">
          <div>
            <p className="section-label">EXPLORE YOUR WORKSPACE</p>
            <h2>Everything in one place</h2>
            <p className="dashboard-section-description">
              Tools to help you understand, organise, and plan your finances.
            </p>
          </div>
        </div>

        <div className="dashboard-links">
          {workspaceItems.map((item) => {
            const Icon = item.icon

            return (
              <Link
                to={item.to}
                className="dashboard-workspace-card"
                key={item.title}
              >
                <div className="dashboard-workspace-card-top">
                  <span className="dashboard-workspace-icon">
                    <Icon size={21} strokeWidth={1.7} />
                  </span>

                  <ArrowUpRight
                    className="dashboard-workspace-arrow"
                    size={19}
                  />
                </div>

                <span className="dashboard-workspace-label">
                  {item.label}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Disclaimer */}
      <footer className="dashboard-disclaimer">
        <ShieldCheck size={18} />

        <p>
          <strong>A thoughtful approach to investing.</strong>
          {' '}All projected returns are estimates, not guarantees.
          Actual results depend on market performance, inflation,
          taxes, and fees.
        </p>
      </footer>
    </div>
  )
}
