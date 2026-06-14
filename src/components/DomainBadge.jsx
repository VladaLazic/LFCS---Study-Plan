export default function DomainBadge({ name, weight, color }) {
  return (
    <div className={`domain-badge domain-badge--${color}`}>
      <span className="domain-weight">{weight}%</span>
      <span className="domain-name">{name}</span>
    </div>
  )
}
