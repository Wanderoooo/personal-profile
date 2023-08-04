import Info from "./Info"

export default function MainContent() {
  return (
    <div className="maincontent">
      <img src={require('../images/profilepic.jpg')} className="profilepic"/>
      <Info />
    </div>
  )
}