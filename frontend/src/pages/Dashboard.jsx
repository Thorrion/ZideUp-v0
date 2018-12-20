import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import All from '../components/Dashboard/All';
import InputAndSearch from '../components/InputAndSearch/InputAndSearch';


const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <InputAndSearch/>
      <All/>

    </div>
  )
}

export default Dashboard