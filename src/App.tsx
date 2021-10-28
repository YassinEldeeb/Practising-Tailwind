import { Nav } from './components/Nav'
import { Separator } from './components/Separator'
import { Hero } from './sections/Hero'

function App() {
  return (
    <div className="App text-gray-600 font-Mulish flex justify-center">
      <div className="max-w-screen-2xl w-full px-6 lg:px-12">
        <Nav />
        <Hero />
        <Separator />
      </div>
    </div>
  )
}

export default App
