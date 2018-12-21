import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import RecapVote from '../components/RecapVote/RecapVote';

const PageRecapVote = (props) => {
  return (
    <div>
      <Navbar/>
      <RecapVote index={props.match.params.index}/>
    </div>
  )
}

export default PageRecapVote
