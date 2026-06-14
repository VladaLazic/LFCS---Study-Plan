import './Header.css'

export default function Header({ darkMode, onToggleDark, activeView, onViewChange }) {
  return (
    <header className="site-header">
      <div className="header-inner container">
        <div className="logo" aria-label="LFCS Study Plan">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <rect width="36" height="36" rx="8" fill="var(--color-primary)"/>
            <text x="5" y="26" fontFamily="monospace" fontSize="18" fontWeight="700" fill="white">$_</text>
          </svg>
          <div className="logo-text">
            <span className="logo-title">LFCS Study Plan</span>
            <span className="logo-sub">12-Week Linux Foundation Prep</span>
          </div>
        </div>
        <nav className="header-nav">
          <button
            className={`nav-btn ${activeView === 'plan' ? 'active' : ''}`}
            onClick={() => onViewChange('plan')}
          >
            📅 Study Plan
          </button>
          <button
            className={`nav-btn ${activeView === 'resources' ? 'active' : ''}`}
            onClick={() => onViewChange('resources')}
          >
            📚 Resources
          </button>
          <button
            className="theme-toggle"
            onClick={onToggleDark}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          >
            {darkMode ? '☀' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  )
}
