import React from 'react';
import { Layout, Upload, Button, Icon } from 'antd';
import './App.css';
import xlsx from 'node-xlsx';
import fs from 'fs';

const {Header, Footer, Content} = Layout;

class App extends React.Component {
    render = () => {
        const uploadProps = {
            name: 'file',
            transformFile: (data) => {console.log(xlsx.parse(fs.readFileSync(data)))},
            headers: {
                authorization: 'authorization-text',
            }
        };
        return (
            <div className="App">
                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Content>
                            <Upload {...uploadProps}>
                                <Button>
                                    <Icon type="upload"/> Click to Upload
                                </Button>
                            </Upload>
                        </Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        )
    }
}

export default App;
