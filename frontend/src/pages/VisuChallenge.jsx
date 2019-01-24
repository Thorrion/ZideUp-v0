import React from 'react'
import Vote from '../components/Vote/Vote';
import BottomNavBar from '../components/Navbar/BottomNavBar';

const PageVote = (props) => {
  return (
    <div>
      <Vote index={props.match.params.index}/>
      <BottomNavBar/>
    </div>
  )
}

export default PageVote
