import { useState } from 'react'
import { WEEKS, EXAM_INFO, RESOURCES } from './data/studyPlan'
import { useProgress } from './hooks/useProgress'
import Header from './components/Header'
import DomainBadge from './components/DomainBadge'
import WeekCard from './components/WeekCard'
import DayModal from './components/DayModal'
import ResourcesPanel from './components/ResourcesPanel'
import ProgressBar from './components/ProgressBar'

export default function App() {
  const { toggleDay, toggleWeek, isDayDone, isWeekDone, totalDays, doneDays, darkMode, setDarkMode } = useProgress()
  const [selectedDay, setSelectedDay] = useState(null)
  const [activeView, setActiveView] = useState('plan') // 'plan' | 'resources'
  const [expandedWeek, setExpandedWeek] = useState(null)

  const total = totalDays(WEEKS)
  const done = doneDays(WEEKS)
  const pct = total > 0 ? Math.round((done / total) * 100) : 0

  return (
    <div className="app-root">
      <Header
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(d => !d)}
        activeView={activeView}
        onViewChange={setActiveView}
      />

      <main className="main-content">
        {/* Exam overview strip */}
        <section className="exam-strip">
          <div className="exam-strip-inner container">
            <div className="exam-meta">
              <div className="exam-title">
                <span className="exam-badge">LFCS</span>
                <span className="exam-name">{EXAM_INFO.fullName}</span>
              </div>
              <div className="exam-details">
                <span>⏱ {EXAM_INFO.duration}</span>
                <span>✅ Pass: {EXAM_INFO.passMark}</span>
                <span>🖥 {EXAM_INFO.format.split(',')[0]}</span>
              </div>
            </div>
            <div className="domain-weights">
              {EXAM_INFO.domains.map(d => (
                <DomainBadge key={d.name} name={d.name} weight={d.weight} color={d.color} />
              ))}
            </div>
          </div>
        </section>

        {/* Progress bar */}
        <section className="progress-section container">
          <ProgressBar done={done} total={total} pct={pct} />
        </section>

        {activeView === 'plan' ? (
          <section className="weeks-section container">
            <div className="weeks-grid">
              {WEEKS.map(week => (
                <WeekCard
                  key={week.week}
                  week={week}
                  isExpanded={expandedWeek === week.week}
                  onToggleExpand={() => setExpandedWeek(expandedWeek === week.week ? null : week.week)}
                  isDayDone={isDayDone}
                  isWeekDone={isWeekDone}
                  onToggleDay={toggleDay}
                  onToggleWeek={toggleWeek}
                  onSelectDay={setSelectedDay}
                />
              ))}
            </div>
          </section>
        ) : (
          <section className="resources-section container">
            <ResourcesPanel resources={RESOURCES} />
          </section>
        )}
      </main>

      {selectedDay && (
        <DayModal
          weekData={selectedDay.weekData}
          dayData={selectedDay.dayData}
          isDone={isDayDone(selectedDay.weekData.week, selectedDay.dayData.day)}
          onToggle={() => toggleDay(selectedDay.weekData.week, selectedDay.dayData.day)}
          onClose={() => setSelectedDay(null)}
        />
      )}
    </div>
  )
}
