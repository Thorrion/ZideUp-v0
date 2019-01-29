import React from 'react'
import Challenge from '../components/Challenge';
import BottomNavBar from '../components/BottomNavBar';

const PageChallenge = (props) => {
  return (
    <div>
      <Challenge id={props.match.params.id}/>
      <BottomNavBar/>
    </div>
  )
}

export default PageChallenge
