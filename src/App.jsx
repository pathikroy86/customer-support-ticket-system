
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Banner/Banner'
import Navbar from './Navbar/Navbar'
import Tickets from './Tickets/Tickets';
import TaskStatus from './TaskStatus/TaskStatus';

function App() {

  const fetchCustomers = async () => {
    const res = await fetch('/customer-data.json');
    return res.json();
  }
  const customerPromise = fetchCustomers();

  const [progress, setProgress] = useState([]);
  const handleProgress = (ticket) => {
    const newArr = [ticket, ...progress];
    setProgress(newArr);
  }
  return (
    <>
      <Navbar></Navbar>
      <Banner progress={progress}></Banner>
      <div className='w-11/12 mx-auto mt-10'>
        <div className='grid grid-cols-3 gap-5'>
          <div className='col-span-2'>
            <h1 className='text-[#34485A] text-2xl font-semibold mb-5'>Customer Tickets</h1>
            <Suspense>
              <Tickets customerPromise={customerPromise}
                handleProgress={handleProgress}
              ></Tickets>
            </Suspense>
          </div>
          <div className='col-span-1'>
            <h1 className='text-[#34485A] text-2xl font-semibold mb-5'>Task Status</h1>
            <TaskStatus progress={progress}></TaskStatus>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
