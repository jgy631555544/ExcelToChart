import React from 'react';
import { Layout } from 'antd';
import './App.css';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider>Sider</Sider>
                <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    </div>
  );
}

export default App;
