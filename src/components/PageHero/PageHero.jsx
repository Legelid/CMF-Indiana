import './PageHero.css'

export default function PageHero({ title, subtitle }) {
  return (
    <div className="page-hero">
      {title && <h1 className="page-hero__title">{title}</h1>}
      {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
    </div>
  )
}
