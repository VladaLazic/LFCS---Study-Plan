import './WeekCard.css'

export default function WeekCard({ week, isExpanded, onToggleExpand, isDayDone, isWeekDone, onToggleDay, onToggleWeek, onSelectDay }) {
  const completedDays = week.days.filter(d => isDayDone(week.week, d.day)).length
  const weekDone = isWeekDone(week.week, week.days.length)

  return (
    <div className={`week-card week-card--${week.domainColor} ${weekDone ? 'week-card--done' : ''}`}>
      <div className="week-card-header" onClick={onToggleExpand} role="button" tabIndex={0}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onToggleExpand()}
        aria-expanded={isExpanded}>
        <div className="week-num">Week {week.week}</div>
        <div className="week-info">
          <div className="week-theme">{week.theme}</div>
          <div className="week-meta">
            <span className={`domain-pill domain-pill--${week.domainColor}`}>{week.domain}</span>
            <span className="week-progress-text">{completedDays}/{week.days.length} days</span>
          </div>
        </div>
        <div className="week-controls">
          <button
            className={`week-check-all ${weekDone ? 'checked' : ''}`}
            onClick={e => { e.stopPropagation(); onToggleWeek(week.week, week.days.length) }}
            title={weekDone ? 'Unmark all days' : 'Mark all days done'}
            aria-label={weekDone ? 'Unmark all days for week ' + week.week : 'Mark all days done for week ' + week.week}
          >
            {weekDone ? '✓ Done' : 'Mark all'}
          </button>
          <span className="expand-icon">{isExpanded ? '▲' : '▼'}</span>
        </div>
      </div>

      {isExpanded && (
        <div className="week-body">
          <p className="week-overview">{week.overview}</p>
          <div className="days-list">
            {week.days.map(day => {
              const done = isDayDone(week.week, day.day)
              return (
                <div key={day.day} className={`day-row ${done ? 'day-row--done' : ''}`}>
                  <button
                    className={`day-check ${done ? 'checked' : ''}`}
                    onClick={() => onToggleDay(week.week, day.day)}
                    aria-label={`Mark ${day.label} as ${done ? 'not done' : 'done'}`}
                  >
                    {done ? '✓' : ''}
                  </button>
                  <button
                    className="day-content"
                    onClick={() => onSelectDay({ weekData: week, dayData: day })}
                    aria-label={`Open details for ${day.label}: ${day.topic}`}
                  >
                    <span className="day-label">{day.label}</span>
                    <span className="day-topic">{day.topic}</span>
                    {day.commands.length > 0 && (
                      <span className="day-cmd-count">{day.commands.length} commands</span>
                    )}
                  </button>
                </div>
              )
            })}
          </div>
          {week.resources.length > 0 && (
            <div className="week-resources">
              <strong>Resources this week:</strong>
              <ul>
                {week.resources.map(r => <li key={r}>{r}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
