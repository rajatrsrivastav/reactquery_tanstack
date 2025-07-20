import { Outlet } from 'react-router-dom'
import {Header} from './header'
import {Footer} from './footer'

const mainLayout = () => {
  return (
    <div className='bg-gray-600 text-white'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default mainLayout