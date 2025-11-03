import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Background Image */}
      <img src="/assets/brand.png" alt="Olor Coffee Bar" className="home-background" />

      {/* Features Section */}
      <div className="features">
        {/* Donuts - Image Left */}
        <div className="feature feature-left">
          <div className="feature-content">
            <h2>Do-Rite Donuts</h2>
            <p>We're proud to serve delicious Do-Rite Donuts alongside our exceptional coffee. The perfect pairing for your morning or afternoon break.</p>
          </div>
          <div className="feature-image">
            <img src="/assets/donuts.png" alt="Do-Rite Donuts" />
          </div>
        </div>

        {/* Coffee Beans - Image Right */}
        <div className="feature feature-right">
          <div className="feature-content">
            <h2>Single Origin Coffee Beans from Colombia</h2>
            <p>Experience the finest single origin coffee beans from Colombia, carefully sourced and expertly roasted. Each cup tells the story of its unique Colombian origin.</p>
          </div>
          <div className="feature-image">
            <img src="/assets/bags.png" alt="Coffee Beans" />
          </div>
        </div>

        {/* Community - Image Left */}
        <div className="feature feature-left">

          <div className="feature-content">
            <h2>Dog Friendly & Welcoming to All</h2>
            <p>Olor Coffee Bar is a place for everyone. Bring your furry friends and enjoy our warm, inclusive community space where all are welcome.</p>
          </div>
          <div className="feature-image">
            <img src="/assets/community.png" alt="Community" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
