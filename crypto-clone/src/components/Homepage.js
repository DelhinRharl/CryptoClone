import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Cryptocurrencies from './Cryptocurrencies';

const Homepage = () => {
const {data, isFetching} = useGetCryptosQuery();
const globalStats =data?.data?.stats;
    console.log(data);
    if(isFetching) return  'Loading...'
  return (
    <div className=" flex-1 h-1/2  divide-y-[2px] divide-slate-300">
     <div  className="text-6xl font-medium" >Cryptyn</div> 
     <div className=" grid grid-cols-3 gap-2 p-2">
     <div className="w-44 h-44 bg-gradient-to-b from-indigo-500 to-indigo-800 rounded-lg p-2 text-xl flex flex-col justify-center">Total Cryptocurrencies {globalStats.total} </div>
     <div className="w-44 h-44 bg-gradient-to-b from-blue-500 to-blue-800  rounded-lg p-2 text-xl flex flex-col justify-center">Total Exchanges {globalStats.totalExchanges} </div>
     <div className="w-44 h-44 bg-gradient-to-b from-amber-500 to-amber-600 rounded-lg p-2 text-xl flex flex-col justify-center">Total Market Cap {globalStats.totalMarketCap} </div>
     <div className="w-44 h-44 bg-slate-500 rounded-lg p-2 text-xl flex flex-col justify-center">Total 24h Volume {globalStats.total24hVolume} </div>
     <div className="w-44 h-44 bg-slate-500 rounded-lg p-2 text-xl flex flex-col justify-center">Total Markets {globalStats.totalMarkets} </div>
    </div>
     <div  className="text-5xl font-semibold">
       <h3>Top Ten CryptoCurrencies in the World</h3>
       <Cryptocurrencies/>
     </div>
     <div>
       <h3>Latest Crypto News</h3>
     </div>
    </div>
  )
}

export default Homepage