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
      <h3 className = "h3s">About</h3>
      <p className="detail-two spiel1">Lorem ipsum dolor sit amet. Ex maxime pariatur aut rerum quia est nemo modi. Et illo dolorem vel omnis galisum vel sapiente ipsam. Id neque</p>
      <h3 className = "h3s">Interests</h3>
      <p className="detail-two spiel2">Lorem ipsum dolor sit amet. Ex maxime pariatur aut rerum quia est nemo modi. Et illo dolorem vel omnis galisum vel sapiente ipsam. Id neque voluptatibus ut </p>
      </section>
      <Navbar />
    </div>
  )
}