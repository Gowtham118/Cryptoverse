import React from 'react'
import { Switch, Route, Link} from 'react-router-dom';
import { Layout,Typography,Space} from 'antd';
 import './App.css' 
import Navbar from './components/Navbar';
import Exchanges from './components/Exchanges';
import Homepage from './components/Homepage';
import Cryptocurrencies from './components/Cryptocurrencies';
import Cryptodetails from './components/Cryptodetails';
import News from './components/News';

const App = () => {
    return (
        <div>
        <div className="app">
            <div className="navbar">
                 <Navbar/>
            </div>
            <div className="main">
                   <Layout>
                       <div className="routes">
                           <Switch>
                               <Route exact path = "/">
                                   <Homepage />
                                </Route>
                               <Route exact path = "/exchanges">
                                   <Exchanges />
                                </Route>
                               <Route exact path = "/cryptocurrencies">
                                   <Cryptocurrencies />
                                </Route>
                               <Route exact path = "/crypto/:coinId">
                                   <Cryptodetails />
                                </Route>
                               <Route exact path = "/news">
                                   <News />
                                </Route>
                           </Switch>
                       </div>
                   </Layout>
            </div>
            <div className="footer">
                <Typography.Title>
                    Cryptoverse <br/>
                    All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
            </div>
        </div>
        </div>
    )
}

export default App
