import { Outlet } from 'react-router-dom'
import HeaderComponent from './components/header'
import Footer from './components/footer'
import Theme from './components/theme'

function App() {
  return (
    <>
      <HeaderComponent />
      <Outlet></Outlet>
      <Footer></Footer>
      <Theme/>
    </>
  )
}

export default App
