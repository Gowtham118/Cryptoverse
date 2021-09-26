import React from 'react'
import { Button, Menu , Typography, Avatar} from 'antd';
import { Link } from 'react-router-dom';
import  {HomeOutlined , MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png'


const Navbar = () => {
    return (
            <div className="navbar-container">
                <div className="logo-container">
                    <Avatar src={icon} size="large" />
                    <h1 className="">Cryptoverse</h1>
                    <Typography.Title level={2} className="logo">
                        </Typography.Title>
                        <Menu theme="dark">
                            <Menu.Item icon={<HomeOutlined />}>
                                <Link to="/">Home</Link>
                                </Menu.Item>
                            <Menu.Item icon={<FundOutlined />}>
                                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                                </Menu.Item>
                            <Menu.Item icon={<MoneyCollectOutlined/>}>
                                <Link to="/exchanges">Exchanges</Link>
                                </Menu.Item>
                            <Menu.Item icon={<BulbOutlined />}>
                                <Link to="/news">News</Link>
                                </Menu.Item>
                        </Menu>
                        {/* <button className="menu-control-design"></button> */}
                </div>
            </div>
        
    )
}
export default Navbar
