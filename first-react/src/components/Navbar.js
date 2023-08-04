

export default function Navbar() {
  return (
    <nav>
      <a href="github.com" target="_blank"><img src={require('../images/githubicon.png')} className="smallicons github" /></a>
      <a href="twitter.com" target="_blank"><img src={require('../images/twittericon.png')} className="smallicons" /></a>
      <a href="facebook.com" target="_blank"><img src={require('../images/facebookicon.png')} className="smallicons" /></a>
      <a href="instagram.com" target="_blank"><img src={require('../images/instagramicon.png')} className="smallicons" /></a>
    </nav>
  )
}