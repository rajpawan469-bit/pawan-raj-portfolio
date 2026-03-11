import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import ScrollToTop from './components/ScrollToTop'

const NestleCaseStudy = lazy(() => import('./pages/NestleCaseStudy'))
const ConestogaCaseStudy = lazy(() => import('./pages/ConestogaCaseStudy'))
const FordCaseStudy = lazy(() => import('./pages/FordCaseStudy'))

const PageLoader = () => (
  <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-zinc-800 border-t-amber-400 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-zinc-400 text-sm">Loading...</p>
    </div>
  </div>
)

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    setTimeout(() => window.scrollTo(0, 0), 0)
    setTimeout(() => window.scrollTo(0, 0), 10)
  }, [location.pathname])

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navigation />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study/nestle-campaign" element={<NestleCaseStudy />} />
          <Route path="/case-study/conestoga-promo" element={<ConestogaCaseStudy />} />
          <Route path="/case-study/ford-bronco" element={<FordCaseStudy />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
