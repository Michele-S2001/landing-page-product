import { useState } from "react"

interface navLink {
  label: string;
  link: string;
}

export default function Navbar() {

  const navLinks: navLink[] = [
    {
      label: 'Home',
      link: '#'
    },
    {
      label: 'I punti di forza',
      link: '#'
    },
    {
      label: 'Recensioni',
      link: '#'
    },
    {
      label: 'Paperelle',
      link: '#'
    },
    {
      label: 'FAQs',
      link: '#'
    },
    {
      label: 'Newsletter',
      link: '#'
    },
  ]

  const [mobileMenuExpanded, setMobileMenuExpanded] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setMobileMenuExpanded((prev) => !prev);
  }

  return (
    <nav className="py-2 relative">
      <div className="container">
        <div className="flex justify-between items-center">
          <a href="#"><img className="max-w-10" src="./imgs/logo.png" alt="Logo "/></a>
          <button 
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuExpanded}
            aria-label="apri menu laterale">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {/* MOBILE MENU */}
          <div className="mobile-menu fixed top-0 left-0 right-0 bottom-0 flex z-20 ">
            <div className="overlay basis-3/12 bg-black/50"></div>

            <div className="menu-content basis-9/12 bg-white p-4">
              <div className="flex justify-between mb-6">
                <img className="max-w-10" aria-hidden="true" src="./imgs/logo.png"/>
                <button
                  onClick={toggleMobileMenu}
                  aria-label="chiudi menu laterale">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="leading-10">
                {navLinks.map((el, idx) => (
                  <li key={idx}><a href={el.link}>{el.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
