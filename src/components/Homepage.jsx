import React from 'react'
import millify from 'millify'
import { Typography,Row,Col,Statistic} from 'antd';
import {Link} from 'react-router-dom';
import {useGetCryptosQuery} from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
// const {Title} = Typography;
const Homepages = () => {
    const {data,isFetching} = useGetCryptosQuery();
    const globalStats = data?.data?.stats;
    console.log(globalStats);
    if(isFetching) return "Loading...";
    return (
        <>
            <Typography.Title level={2} className="heading">Global Crypto Stats
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
                <Col span={12}><Statistic title="Total 24h volume" value={millify(globalStats.total24hVolume)} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
            </Row>
            </Typography.Title>
            <Cryptocurrencies simpilfied={true} />
            <div className="home-heading-container">
                <Typography.Title level={2} className="home-title"> Top 10 Cryptocurrencies in the world
                </Typography.Title>
                <Typography.Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More </Link>
                </Typography.Title>
            </div>
            <News />
              
        </>
    )
}

export default Homepages
