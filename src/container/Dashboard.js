import React from 'react';
import Main from '../components/main/Main';
import Sidebar from '../components/sidebar/Sidebar';

const Dashboard = () => {
  return (
    <div className='body'>
      <Sidebar/>
      <Main/>
    </div>
  )
}

export default Dashboard
