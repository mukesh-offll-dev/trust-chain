import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import Features from './components/Features'
import ComingSoon from './components/ComingSoon'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Features />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  )
}
