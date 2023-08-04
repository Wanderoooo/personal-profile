import Buttons from "./Buttons"
import Navbar from "./Navbar"

export default function Info() {
  return (
    <div className="info">
      <h1>Alissa Guo</h1>
      <p className="detail-one">Frontend Developer</p>
      <p className="detail-two">personal website</p>
      <Buttons />
      <section className="aboutmore">
      <h3>About</h3>
      <p className="detail-two">about me spiel</p>
      <h3>Interests</h3>
      <p className="detail-two">interests spiel</p>
      </section>
      <Navbar />
    </div>
  )
}