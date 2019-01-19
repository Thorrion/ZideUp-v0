import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import NewDef from '../components/Dashboard/NewDef';
import Menu from '../components/InputAndSearch/Menu';


const DashboardNew = () => {
  return (
    <div>
      <Navbar/>
      {/* <Menu/> */}
      <Menu/>
      <NewDef/>

    </div>
  )
}

export default DashboardNew