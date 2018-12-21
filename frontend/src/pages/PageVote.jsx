import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Vote from '../components/Vote/Vote';

const PageVote = (props) => {
  return (
    <div>
      <Navbar/>
      <Vote index={props.match.params.index}/>
    </div>
  )
}

export default PageVote
