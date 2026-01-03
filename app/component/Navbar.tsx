const Navbar = () => {
  const links = ["link 1", "link 2", "link 3", "link 4", "link 5"]
  const linksStyle = "hover:text-cta-button cursor-pointer transition-colors"

  return (
    <nav className="w-full py-4 px-8 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-font-main tracking-tight">My home</h1>
      <ul className="flex gap-6 text-base font-medium text-font-main">
        {links.map(link => (
          <li key={link} className={linksStyle}>
            {link}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { Navbar }
