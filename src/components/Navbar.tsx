import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About Us</a>
        <a href="#photos" className="nav-link">Photos</a>
        <a href="#contact" className="nav-link">Contact</a>
        <a href="https://order.toasttab.com/online/olorcoffeebar" target="_blank" rel="noopener noreferrer" className="nav-link">Order Online</a>
      </div>
    </nav>
  )
}

export default Navbar
