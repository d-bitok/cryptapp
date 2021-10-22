import React from "react";
import millify from "millify";
import { 
    // Topography, 
    Row, 
    Col, 
    Statistic, 
    Typography 
} from "antd";
// import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;

const HomePage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    
    if (isFetching) console.log('Fetching ...');

    return (
        <>
        <Title level={2} className="heading">Global Crypto Stats</Title>
        <Row gutter={[32, 32]}>
            <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
            {/* <Col span={12}><Statistic title="Total Exchanges" value={"3"} /></Col> */}
            {/* <Col span={12}><Statistic title="Total Market Cap" value="3" /></Col> */}
            {/* <Col span={12}><Statistic title="Total 24h Volume" value="3" /></Col> */}
            {/* <Col span={12}><Statistic title="Total Markets" value="3" /></Col> */}
            {/* <Col span={12}><Statistic title="Total Cryptocurrencies" value="3" /></Col> */}

            <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={`KES ${millify(globalStats.totalMarketCap)}`} /></Col>
            <Col span={12}><Statistic title="Total 24h Volume" value={`KES ${millify(globalStats.total24hVolume)}`} /></Col>
            <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
            <Col span={12}><Statistic title="Total Cryptocurrencies" value="3" /></Col>
{/*  */}
        </Row>
        </>
    )
}

export default HomePage; 