import React from 'react'
import HomeIcon from '@mui/icons-material/Home';

const Dashboard = () => {
  return (
    <div className="w-1/4  bg-indigo-700 relative">
        <aside className="w-1/6 h-full  fixed left-0 top-0">
        <div>
            <img src="i.png" alt="img" />
            <h1>Cryptowatch</h1>
        </div>
        <div>
            <p>Home</p>
        </div>
        <div>
            <p>Cryptos</p>
        </div>
        <div>
            <p>News</p>
        </div>
        </aside>
    </div>
  )
}

export default Dashboard