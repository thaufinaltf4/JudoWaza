import { Component, ReactNode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { LibraryPage } from '@/pages/LibraryPage'
import { AboutPage } from '@/pages/AboutPage'
import { QuizPage } from '@/pages/QuizPage'
import { GoKyoPage } from '@/pages/GoKyoPage'

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0c0a09] flex items-center justify-center">
          <p className="font-display text-3xl text-stone-700">Something went wrong.</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LibraryPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gokyo" element={<GoKyoPage />} />
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center">
              <p className="font-display text-5xl text-stone-700">404 Not Found</p>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
