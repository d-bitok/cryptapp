import React from "react";
import millify from "millify";
import { 
    // Topography, 
    Row, 
    Col, 
    Statistic, 
    Typography 
} from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";

import CryptoCurrencies from "./CryptoCurrencies";
import News from "./News"

const { Title } = Typography;

const HomePage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    
    if (isFetching) console.log('Fetching ...');
    console.log(data);

    return (
        <>
        <Title level={2} className="heading">Global Crypto Stats</Title>
        <Row gutter={[32, 32]}>
            <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
            <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={`$ ${millify(globalStats.totalMarketCap)}`} /></Col>
            <Col span={12}><Statistic title="Total 24h Volume" value={`$ ${millify(globalStats.total24hVolume)}`} /></Col>
            <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
            <Col span={12}><Statistic title="Total Coins Limit" value={globalStats.limit}/></Col>

            {/* <Col span={12}><Statistic title="Total Exchanges" value="3" /></Col>
            <Col span={12}><Statistic title="Total Market Cap" value="3" /></Col>
            <Col span={12}><Statistic title="Total 24h Volume" value="3" /></Col>
            <Col span={12}><Statistic title="Total Markets" value="3" /></Col>
            <Col span={12}><Statistic title="Total Cryptocurrencies" value="3" /></Col> */}
        </Row>
        <div className="home-heading-container">
            <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
            <Title level={3} className="show-more">
                <Link to="/cryptocurrencies">
                    Show More
                </Link>
            </Title>
        </div>
        <CryptoCurrencies simplified />
        <div className="home-heading-container">
            <Title level={2} className="home-title">Lates Crypto News</Title>
            <Title level={3}>
                <Link to="/news">
                    Show More
                </Link>
            </Title>
        </div>
        <News />

        </>
    )
}

export default HomePage; 