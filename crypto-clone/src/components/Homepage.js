import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'

const Homepage = () => {
    const {data,isFetching}= useGetCryptosQuery();
    console.log(data);
  return (
    <div>Homepage</div>
  )
}

export default Homepage