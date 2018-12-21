import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import RecapTheme from '../components/RecapTheme/RecapTheme';

const PageRecapTheme = (props) => {
  return (
    <div>
      <Navbar/>
      <RecapTheme index={props.match.params.index}/>
    </div>
  )
}

export default PageRecapTheme
