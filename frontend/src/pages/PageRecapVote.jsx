import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import RecapVote from '../components/RecapVote/RecapVote';

const PageRecapVote = (props) => {
  return (
    <div>
      <Navbar/>
      <RecapVote id={props.match.params.id}/>
    </div>
  )
}

export default PageRecapVote
