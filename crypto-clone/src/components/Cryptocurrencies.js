import React, { useState } from 'react'
import { useStore } from 'react-redux';
import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = () => {
    const {data:cryptoList, isFetching}= useGetCryptosQuery();
    const [cryptos,setCryptos] = useState(cryptoList?.data?.coins);
    console.log(cryptos);
  return (
    <div> <h5>Cryptocurrencies</h5>
     <div className="card">
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Cryptocurrencies