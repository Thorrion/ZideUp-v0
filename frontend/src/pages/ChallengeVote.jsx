import React from 'react'
import ChallengeVote from '../components/ChallengeVote';
import BottomNavBar from '../components/BottomNavBar';

const PageChallengeVote = (props) => {
  return (
    <div>
      <ChallengeVote id={props.match.params.id}/>
      <BottomNavBar/>
    </div>
  )
}

export default PageChallengeVote
