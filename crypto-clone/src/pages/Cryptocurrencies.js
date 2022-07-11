import React, { useState } from 'react'
import { useStore } from 'react-redux';
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Card ,CardContent,Link, CardMedia, Typography } from '@mui/material';

const Cryptocurrencies = ({simplified}) => {
    const count = simplified? 10: 100;
    const {data:cryptoList, isFetching}= useGetCryptosQuery(count);
    const [cryptos,setCryptos] = useState(cryptoList?.data?.coins);
    console.log(cryptos);
  return (
    <div className="flex-1">

        <div className="flex flex-wrap gap-4">
            {isFetching? 'Loading...' :
            cryptos.map(crypto => (
                <Card key={crypto.id} className="md:w-2/12 lg:w-2/12 bg-white shadow-md shadow-slate-300 hover:bg-slate-100 hover:shadow-lg hover:shadow-slate-800  ">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {crypto.name}
                        </Typography>
                         <CardMedia  image={crypto.iconUrl} alt={crypto.name } className="w-6 h-6 flex" />
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