import React from 'react'
import ChallengeThemeIdeas from '../components/ChallengeThemeIdeas';
import BottomNavBar from '../components/BottomNavBar';

const PageChallengeThemeIdeas = (props) => {
  return (
    <div>
      <ChallengeThemeIdeas id={props.match.params.id} categoryid={props.match.params.categoryid}/>
      <BottomNavBar/>
    </div>
  )
}

export default PageChallengeThemeIdeas
