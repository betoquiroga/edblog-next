import React from "react"
import Link from "next/link"

const MainMenu = () => (
  <nav>
    <ul>
      <li> <Link href="/"><a>Inicio</a></Link> </li>
      <li> <Link href="/about"><a>Acerca de</a></Link> </li>
      <li> <Link href="/contact"><a>Contacto</a></Link> </li>
    </ul>
  </nav>
)

export default MainMenu