import { useEffect } from 'react'
import './DayModal.css'

export default function DayModal({ weekData, dayData, isDone, onToggle, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={dayData.topic}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-meta">
            <span className={`domain-pill domain-pill--${weekData.domainColor}`}>{weekData.domain}</span>
            <span className="modal-week-day">Week {weekData.week} · {dayData.label}</span>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">✕</button>
        </div>
        <h2 className="modal-title">{dayData.topic}</h2>

        <div className="modal-body">
          {dayData.subtopics.length > 0 && (
            <section>
              <h3 className="modal-section-title">📋 What to study</h3>
              <ul className="modal-subtopics">
                {dayData.subtopics.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </section>
          )}

          {dayData.commands.length > 0 && (
            <section>
              <h3 className="modal-section-title">💻 Key commands</h3>
              <div className="commands-list">
                {dayData.commands.map((cmd, i) => (
                  <code key={i} className="command-chip">{cmd}</code>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="modal-footer">
          <button
            className={`mark-done-btn ${isDone ? 'done' : ''}`}
            onClick={onToggle}
          >
            {isDone ? '✓ Mark as not done' : 'Mark as done'}
          </button>
        </div>
      </div>
    </div>
  )
}
