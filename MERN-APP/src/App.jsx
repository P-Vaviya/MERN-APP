import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import Contact from './Pages/Contact'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
    </Routes>
    
    </BrowserRouter> )
}