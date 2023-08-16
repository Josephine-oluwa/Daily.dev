import { Outlet } from 'react-router-dom'
import Header from '../common/Header'
import HomeScreen from '../../pages/Screen/HomeScreen'

const Layout = () => {
  return (
    <div>
      <Header/>
      {/* <HomeScreen/> */}
      <Outlet/>
    
    </div>
  )
}

export default Layout