import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Cryptocurrencies from './Cryptocurrencies';

const Homepage = () => {
const {data, isFetching} = useGetCryptosQuery(10);
const globalStats =data?.data?.stats;
    console.log(data);
    if(isFetching) return  'Loading...'
  return (
    <div className="flex-1 h-full  divide-y-[2px] divide-slate-300">
     <div  className="text-6xl font-medium" >Cryptyn</div> 
     <div className=" grid grid-cols-3 gap-2 p-2 divide-y-2 ">
     <div className="w-[60%] h-[100%] bg-gradient-to-b from-indigo-200 to-indigo-500 border-t-2 border-indigo-400 rounded-lg p-2 text-xl flex flex-col justify-center hover:shadow-lg hover:shadow-indigo-900">Total Cryptocurrencies {globalStats.total} </div>
     <div className="w-[60%] h-[100%] bg-gradient-to-b from-blue-200 to-blue-500  border-b-2 border-blue-400  rounded-lg p-2 text-xl flex flex-col justify-center hover:shadow-lg hover:shadow-blue-900">Total Exchanges {globalStats.totalExchanges} </div>
     <div className="w-[60%] h-[100%] bg-gradient-to-b from-amber-300 to-amber-500 border-b-2 border-amber-400 rounded-lg p-2 text-xl flex flex-col justify-center hover:shadow-lg hover:shadow-amber-900">Total Market Cap {globalStats.totalMarketCap} </div>
     <div className="w-[60%] h-[100%]  bg-gradient-to-b from-green-300 to-green-500  border-b-2 border-green-400 rounded-lg p-2 text-xl flex flex-col justify-center hover:shadow-lg hover:shadow-green-900">Total 24h Volume {globalStats.total24hVolume} </div>
     <div className="w-[60%] h-[100%] bg-gradient-to-b from-red-400 to-red-500  border-b-2 border-red-400  rounded-lg p-2 text-xl flex flex-col justify-center hover:shadow-lg hover:shadow-red-900">Total Markets {globalStats.totalMarkets} </div>
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