import './Header.css'

function Header() {
  return (
    <header className="header">
        <div className="header-container">
        {/* Left side - Social Media Icons */}
        <div className="social-links">
          <a href="https://www.instagram.com/olorcoffeebar" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://order.toasttab.com/online/olorcoffeebar" target="_blank" rel="noopener noreferrer" className="order-online-btn">
            Order Online
          </a>
        </div>

        {/* Center - Logo */}
        <div className="logo-section">
          <img src="/assets/logo.png" alt="Olor Coffee Bar" className="header-logo" />
          <div className="logo-subtitle">OLOR COFFEE BAR</div>
        </div>

        {/* Right side - Contact Info */}
        <div className="contact-info">
          <a href="https://maps.google.com/?q=1013+W+Webster+Ave,+Chicago,+IL+60614" target="_blank" rel="noopener noreferrer" className="location-link">
          1013 W Webster Ave, Chicago, Illinois 60614 
          <br />
          (773) 661-6425
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
