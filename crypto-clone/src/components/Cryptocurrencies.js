import React, { useState } from 'react'
import { useStore } from 'react-redux';
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Card ,CardContent,Link, CardMedia, Typography } from '@mui/material';

const Cryptocurrencies = () => {
    const {data:cryptoList, isFetching}= useGetCryptosQuery();
    const [cryptos,setCryptos] = useState(cryptoList?.data?.coins);
    console.log(cryptos);
  return (
    <div>
        <div>
            <h3>Top Ten CryptoCurrencies in the World</h3>
        </div>

        <div className="flex flex-wrap gap-4">
            {isFetching? 'Loading...' :
            cryptos.map(crypto => (
                <Card key={crypto.id} className="w-full md:w-2/12 lg:w-3/12 ">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {crypto.name}
                        </Typography>
                         <CardMedia component="img" height="4" image={crypto.iconUrl} alt={crypto.name } 
      />
                        <Typography variant="body2" component="p">
                            {crypto.symbol}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {crypto.price}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {crypto.volume}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {crypto.marketCap}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
            </div>
    </div>
  )
 }
export default Cryptocurrencies