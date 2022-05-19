import React from 'react'
import {Link} from "react-router-dom"
import './Navigation.scss'
function Navigation() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
      <Link to="/works">Works</Link>
    </nav>
  )
}

export default Navigation