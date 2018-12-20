import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import NewDef from '../components/Dashboard/NewDef';
import InputAndSearch from '../components/InputAndSearch/InputAndSearch';


const DashboardNew = () => {
  return (
    <div>
      <Navbar/>
      <InputAndSearch/>
      <NewDef/>

    </div>
  )
}

export default DashboardNew