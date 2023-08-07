
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import AddRequest from './AddRequest'
import Homepage from './Homepage'
import Notifications from './Notifications'
import Recordings from './Recordings'
import Settings from './Settings'
const Index = () => {
    const [activePage, setActivePage] = useState('homepage');

    const handleNavbarButtonClick = (page) => {
      setActivePage(page);
    };
  return (
    <div>
       <Navbar handleIconClick={handleNavbarButtonClick} />
      {activePage === 'homepage' && <Homepage />}
      {activePage === 'addRecording' && <AddRequest />}
      {activePage === 'playRecording' && <Recordings />}
      {activePage === 'notifications' && <Notifications />}
      {activePage === 'settings' && <Settings />}
    </div>
  )
}

export default Index
