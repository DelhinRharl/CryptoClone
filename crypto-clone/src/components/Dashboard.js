import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import ArticleIcon from '@mui/icons-material/Article';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="w-1/4 text-gray-200  ">
        <aside className="w-1/6 h-full bg-black fixed left-0 top-0 rounded-tr-3xl  flex flex-col gap-8 items-center  p-2 text-lg ">
            <div className="w-full divide-y-[1px] divide-slate-700 pl-6 flex flex-col gap-8 text-2xl ">
      <Link to="/">
        <div>
            <h1 className="text-4xl font-bold"> Cryptyn</h1>
        </div>
        </Link>
        <Link to="/">
        <div>
            <p className="flex items-center gap-4 hover:border-r-4 hover:border-indigo-700 hover:text-indigo-700">  <DashboardIcon className="text-indigo-700"/>Home</p>
        </div>
        </Link>
        <Link to="/crypto">
        <div>
            <p className="flex items-center gap-4 hover:border-r-4 hover:border-indigo-700 hover:text-indigo-700">  <CurrencyBitcoinIcon className="text-indigo-700"/>Cryptos</p>
        </div>
        </Link>
        <Link to="/news">
        <div>
            <p className="flex items-center gap-4 hover:border-r-4 hover:border-indigo-700 hover:text-indigo-700">  <ArticleIcon className="text-indigo-700"/>News</p>
        </div>
        </Link>
        <Footer/>
        </div>
        </aside>
    </div>
  )
}

export default Dashboard