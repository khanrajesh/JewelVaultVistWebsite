import './style.css'
export function HomePage() {
  return (
    <div className="page home-immersive">
      <div className="hero-copy">
        <div className="kicker">Interactive jewellery POS</div>
        <h1>Explore JewelVault with an immersive hero</h1>
        <p className="lead">
          Full-width canvas reserved for your 3D bot or hero video. Currently showing a placeholder
          message until the interactive experience is enabled.
        </p>
      </div>

      <div className="spline-fallback">
        <div className="fallback-title">JewelVault interactive canvas</div>
        <div className="fallback-text">
          This area will host your full-width 3D experience or background video.
        </div>
      </div>
    </div>
  )
}
