import { Header } from 'antd/es/layout/layout'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BucketList from '../components/BucketList'
// import History from '../components/History'
import Home from '../components/Home'
import Navbar from '../components/Navbar'

const Allroutes = () => {
  return (
    <div>
        <Header>
      <Navbar />
        </Header>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/buckets' element={<BucketList/>} />
            {/* <Route path='/history' element={<History/>} /> */}
        </Routes>
    </div>
  )
}

export default Allroutes
