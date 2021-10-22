import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { 
    Layout, 
    Typography, 
    Space 
} from 'antd';

import { Navbar, HomePage, Exchanges, CryptoCurrencies, CryptoDetails, News } from './components';
import './App.css'

const App = () => {
    return (
        <div className="app">

            {/* Navbar Content */}
            <div className="navbar">
                <Navbar />
            </div>
            
            {/* Main Content */}
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            {/* Homepage Route */}
                            <Route exact path="/">
                                <HomePage />
                            </Route>
                            {/* Exchanges Route */}
                            <Route exact path="/exchanges">
                                <Exchanges />
                            </Route>
                            {/* Crypto Currencies Route */}
                            <Route exact path="/cryptocurrencies">
                                <CryptoCurrencies />
                            </Route>
                            {/* Crypto Details Route */}
                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails />
                            </Route>
                            {/* News Route */}
                            <Route exact path="/news">
                                <News />
                            </Route>
                        </Switch>
                    </div>
                </Layout>
                {/* Footer Content */}
                <div className="footer">
                    <Typography.Title level={5} style={{
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        Copyright © 2021
                        <Link to="/">
                            Cryptapp Inc.
                        </Link>
                        <br />
                        All Rights Reserved.
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
            
        </div>
    );
};

export default App;