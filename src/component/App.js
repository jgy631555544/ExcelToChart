import React from 'react';
import { Layout, Upload, Button, Icon } from 'antd';
import './App.css'

const {Header, Footer, Content} = Layout;
class App extends React.Component {
    constructor() {
        super();
        console.log('我是1')
        window.xxzListener.on('ipcConnect',function (data) {
            console.log('瞅瞅',data)
        })
    }

    render = () => {
        const uploadProps = {
            name: 'file',
            transformFile: (data) => {
                console.log(data)
                // ipcRenderer.send('asynchronous-message', data.path)
            },
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
