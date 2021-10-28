import { useState } from 'react'
import { Link } from './Link'

export const Nav = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const OpenDrawerHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setOpenDrawer(!openDrawer)
  }
  return (
    <nav className="flex justify-between items-center w-full bg-white py-5 lg:py-8 sticky top-0 border-b-2 border-secondary lg:border-b-0">
      <div className="flex justify-center items-center pointer-events-none select-none">
        <div className="flex justify-center items-center bg-primary w-12 h-12 rounded-full overflow-hidden">
          <h1 className="font-bold text-white text-3xl">T</h1>
        </div>
        <h1 className="ml-3 font-bold text-2xl">Trafalgar</h1>
      </div>
      <div className="hidden lg:block">
        <Link href="/" text="Home" active />
        <Link href="/find" text="Find a doctor" />
        <Link href="/testimonials" text="Testimonials" />
        <Link href="/about" text="About us" />
      </div>
      <div
        onClick={OpenDrawerHandler}
        className="flex flex-col cursor-pointer p-3 pr-0 lg:hidden z-50"
      >
        <div
          className={`bg-primary h-1 w-12 mb-2 rounded-sm transform duration-200 ${
            openDrawer ? 'rotate-45 translate-y-full' : ''
          }`}
        />
        <div
          className={`bg-primary h-1 w-12 rounded-sm transform duration-200 ${
            openDrawer ? '-rotate-45 -translate-y-full' : ''
          }`}
        />
      </div>
      <div
        onClick={OpenDrawerHandler}
        className={`bg-opacity-50 w-full h-screen fixed top-0 right-0 flex justify-end
             lg:hidden transform transition-colors duration-150 ${
               openDrawer ? 'bg-black' : 'bg-transparent'
             } ${openDrawer ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div
          className={`bg-white flex flex-col items-start justify-center h-full w-2/3 transform px-0 duration-300 ${
            openDrawer ? ' translate-x-0' : 'translate-x-full'
          }`}
        >
          <Link href="/" text="Home" active />
          <Link href="/find" text="Find a doctor" />
          <Link href="/testimonials" text="Testimonials" />
          <Link href="/about" text="About us" />
        </div>
      </div>
    </nav>
  )
}
