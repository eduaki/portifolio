import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from '../App'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

export default function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route index element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}
