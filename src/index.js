import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import App2 from './App2';
import App1 from './App1';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

ReactDOM.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App2 />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root2')
// );

<style>
</style>
