import './Ticker.css'

export default function Ticker({ items = [] }) {
  return (
    <div className="ticker">
      <div className="ticker__track">
        {items.concat(items).map((item, i) => (
          <span key={i} className="ticker__item">{item}</span>
        ))}
      </div>
    </div>
  )
}
