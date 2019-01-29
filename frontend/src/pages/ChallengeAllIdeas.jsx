import React from 'react'
import ChallengeAllIdeas from '../components/ChallengeAllIdeas';
import BottomNavBar from '../components/BottomNavBar';

const PageChallengeAllIdeas = (props) => {
  return (
    <div>
      <ChallengeAllIdeas id={props.match.params.id} categoryid={props.match.params.categoryid}/>
      <BottomNavBar/>
    </div>
  )
}

export default PageChallengeAllIdeas
