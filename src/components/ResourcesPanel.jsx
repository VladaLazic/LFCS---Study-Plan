import './ResourcesPanel.css'

const CATEGORY_ORDER = ['Course', 'Labs', 'Practice', 'Guide', 'Book', 'Tutorial', 'Notes', 'Docs', 'Wiki']

export default function ResourcesPanel({ resources }) {
  const grouped = CATEGORY_ORDER.reduce((acc, cat) => {
    const items = resources.filter(r => r.category === cat)
    if (items.length > 0) acc[cat] = items
    return acc
  }, {})

  return (
    <div className="resources-panel">
      <h2 className="resources-heading">Study Resources</h2>
      <p className="resources-sub">{resources.length} curated resources for the LFCS exam, organised by type.</p>
      <div className="resources-grid">
        {Object.entries(grouped).map(([cat, items]) => (
          <div key={cat} className="resource-group">
            <h3 className="resource-group-title">{cat}</h3>
            <ul className="resource-list">
              {items.map(r => (
                <li key={r.title}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="resource-link">
                    {r.title}
                    <span className="resource-link-arrow">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
