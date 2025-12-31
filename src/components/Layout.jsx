import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import AccentPicker from './AccentPicker'

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <AccentPicker />
    </>
  )
}

export default Layout
