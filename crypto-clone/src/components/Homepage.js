import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Cryptocurrencies from './Cryptocurrencies';

const Homepage = () => {
const {data, isFetching} = useGetCryptosQuery();
const globalStats =data?.data?.stats;
    console.log(data);
    if(isFetching) return  'Loading...'
  return (
    <div>
     <div>Homepage</div> 
     <div>Total Cryptocurrencies {globalStats.total} </div>
     <div>Total Exchanges {globalStats.totalExchanges} </div>
     <div>Total Market Cap {globalStats.totalMarketCap} </div>
     <div>Total 24h Volume {globalStats.total24hVolume} </div>
     <div>Total Markets {globalStats.totalMarkets} </div>

     <div>
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