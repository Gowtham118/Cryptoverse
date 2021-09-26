import React,{useState} from 'react'
import millify from 'millify'
import {Link} from 'react-router-dom';
import {Card,Row,Col,Input} from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = () => {
    const {data:cryptosList,isFetching} = useGetCryptosQuery();
    const {cryptos, setCryptos}= useState(cryptosList?.data?.coins);   
    return (
        <>
    <Row gutter={[32,32]} className="crypto-card-container">
        try
           {cryptos.map((currency)=>(
        <Col xs={24} sm={12} lg={6} classname="crypto-card" key={currency.id}>
           <Link to={`/crypto/${currency.id}`}>
               <Card title={`${currency.rank}.${currency.name}`}
               extra ={<img className="crypto-image" src ={currency.iconUrl} />}
               hoverable
               >
                  <p>Price:{millify(currency.price)}</p>
                  <p>Market Cap:{millify(currency.marketCap)}</p>
                  <p>Daily Change:{millify(currency.change)}%</p>
                </Card>
            </Link>           
        </Col>
           ))}   
        catch(e){
              <h1>Not defined</h1>
           }      
    </Row>  
        </>
    )
}


export default Cryptocurrencies
