import './ProgressBar.css'

export default function ProgressBar({ done, total, pct }) {
  return (
    <div className="progress-wrapper">
      <div className="progress-header">
        <span className="progress-label">Overall Progress</span>
        <span className="progress-stat">{done} / {total} days completed · <strong>{pct}%</strong></span>
      </div>
      <div className="progress-track" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      {pct >= 100 && (
        <div className="progress-complete">🎉 All days completed! You're ready for the exam!</div>
      )}
    </div>
  )
}
