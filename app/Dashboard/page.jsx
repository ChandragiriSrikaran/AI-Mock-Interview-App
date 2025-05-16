import React from 'react';
import AddNewInterview from './_components/AddNewInterview';
import Interviewlist from './_components/Interviewlist';
function Dashboard() {
  return (
    <div className='p-10'>
      <h2 className='font-bold text-2xl'>DashBoard</h2>
      <h2 className='text-gray-500'>Create and start your AI Mockup Interiew</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 my-3'>
        <AddNewInterview/>
      </div>
    {/* Previous Interiew */}
    <Interviewlist/>
    </div>
  );
}

export default Dashboard;
