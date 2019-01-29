import React from 'react'
import Idea from '../components/Idea';
import BottomNavBar from '../components/BottomNavBar';

const PageIdea = (props) => {
  return (
    <div>
      <Idea id={props.match.params.id}  ideaid={props.match.params.ideaid}categoryid={props.match.params.categoryid}/>
      <BottomNavBar/>
    </div>
  )
}

export default PageIdea
