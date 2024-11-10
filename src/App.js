import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Compo/Home'
import CreateUser from './Compo/CreateUser'
import GetAllUser from './Compo/GetAllUser'
import UserProfile from './Compo/UserProfile'
const App = () => {
  return (
    <div>  
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/add' element={<CreateUser/>} />
      <Route  path='/getAll' element={<GetAllUser/>} />
      <Route path='/profile' element={<UserProfile/>} />
    </Routes>
    </div>
  )
}

export default App
