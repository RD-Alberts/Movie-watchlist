import './App.css'
import { Navbar } from './components/Navbar'
import { Homepage } from './pages/Homepage'

export const App = () => {

  return (
    <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow p-4">
      <Homepage />
    </main>
  </div>

  )
}

