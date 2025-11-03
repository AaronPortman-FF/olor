import { useState, useEffect } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Photos from './components/Photos'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash) {
        setCurrentPage(hash)
      } else {
        setCurrentPage('home')
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <>
      <Header />
      <Navbar />
      <div className="home-container">
      {currentPage === 'home' && <Home />}
      </div>
      {currentPage === 'about' && <AboutUs />}

      {currentPage === 'contact' && <Contact />}

      {currentPage === 'photos' && <Photos />}
    </>
  )
}

export default App
