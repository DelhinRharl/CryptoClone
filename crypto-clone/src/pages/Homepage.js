import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Cryptocurrencies from './Cryptocurrencies';

const Homepage = () => {
const {data, isFetching} = useGetCryptosQuery(10);
const globalStats =data?.data?.stats;
    console.log(data);
    if(isFetching) return  'Loading...'
  return (
    <div className="flex-1 h-full divide-y-[2px] divide-slate-300">
     <div  className="text-6xl font-medium" >Cryptyn</div> 
     <div className=" grid grid-cols-3 h-1/2 gap-2 p-2 divide-y-2 ">
     <div className="w-[60%] h-[100%]  border-2 border-sky-500 rounded-lg shadow-md shadow-slate-400 p-2 text-xl flex flex-col justify-center hover:shadow-lg hover:shadow-indigo-900">Total Cryptocurrencies {globalStats.total} </div>
     <div className="w-[60%] h-[100%]  rounded-lg shadow-md shadow-slate-400 p-2 text-xl flex flex-col justify-center hover:shadow-lg hover:shadow-blue-900">Total Exchanges exhangjhb {globalStats.totalExchanges} </div>
     <div className="w-[60%] h-[100%]  rounded-lg shadow-md shadow-slate-400 p-2 text-xl flex flex-col justify-center hover:shadow-lg hover:shadow-amber-900">Total Market Cap {globalStats.totalMarketCap} </div>
     <div className="w-[60%] h-[100%]   rounded-lg shadow-md shadow-slate-400 p-2 text-xl flex flex-col justify-center hover:shadow-lg hover:shadow-green-900">Total 24h Volume {globalStats.total24hVolume} </div>
     <div className="w-[60%] h-[100%] border-2 border-red-400 rounded-lg  shadow-md shadow-slate-400 p-2 text-xl flex flex-col justify-center hover:shadow-lg hover:shadow-red-900">Total Markets {globalStats.totalMarkets} </div>
    </div>
     <div  className="text-5xl font-semibold">
       <h3>Top Ten CryptoCurrencies in the World</h3>
       <Cryptocurrencies simplified/>
     </div>
     <div>
       <h3>Latest Crypto News</h3>
     </div>
    </div>
  )
}

export default Homepage