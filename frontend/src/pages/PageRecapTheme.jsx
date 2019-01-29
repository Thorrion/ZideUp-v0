import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import RecapTheme from '../components/RecapTheme/RecapTheme';

const PageRecapTheme = (props) => {
  return (
    <div>
      <Navbar/>
      <RecapTheme id={props.match.params.id}/>
    </div>
  )
}

export default PageRecapTheme
