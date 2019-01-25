import React from 'react'
import Navbar from '../../components/Navbar';
import Menu from '../../components/Menu';
import BottomNavBar from '../../components/BottomNavBar'

const Dashboard = () => {
  return (
    <div>
      <Navbar title="Tableau des défis" notif={true} addChallenge={true}/>
      <Menu/>
      <BottomNavBar/>
    </div>
  )
}

export default Dashboard