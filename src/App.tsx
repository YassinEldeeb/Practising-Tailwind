import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { Separator } from './components/Separator'
import { Articles } from './sections/Articles'
import { Hero } from './sections/Hero'
import { Services } from './sections/Services'
import { Testimonials } from './sections/Testimonials'

function App() {
  return (
    <div className='App text-gray-600 font-Mulish flex justify-center items-center flex-col'>
      <Nav />
      <div className='overflow-hidden w-full flex flex-col items-center'>
        <div className='max-w-screen-2xl w-full px-6 lg:px-12'>
          <Hero />
          <Separator />
          <Services />
          <Testimonials />
          <Articles />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
