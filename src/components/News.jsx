import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from "moment";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Loader from "./Loader";

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;

export default function News ({ simplified }) {
    // const [newsCategory, setNewsCategory] = useState('CryptoCurrency');
    const { data } = useGetCryptosQuery(100);
    // const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

    // if (!cryptoNews?.value) return <Loader />;
    console.log(data);
    // console.log(cryptoNews);
    return (
        <div>
            <p>
                News
            </p>
        </div>
    )
}
