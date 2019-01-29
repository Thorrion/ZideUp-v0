import React from 'react'
import CreateIdea from '../components/CreateIdea';
import BottomNavBar from '../components/BottomNavBar';

const PageCreateIdea = (props) => {
  return (
    <div>
      <CreateIdea id={props.match.params.id}/>
      <BottomNavBar/>
    </div>
  )
}

export default PageCreateIdea
