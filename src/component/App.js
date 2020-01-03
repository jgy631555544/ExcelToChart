import React from 'react';
import { Layout, Upload, Button, Icon } from 'antd';
import './App.css'

const {Header, Footer, Content} = Layout;
class App extends React.Component {
    constructor() {
        super();
        window.xxzListener.on('ipcMain',function (data) {
            console.log('收到解析的数据',data)
        })
    }

    render = () => {
        const uploadProps = {
            name: 'file',
            accept:'.xls,.xlsx',
            transformFile: (data) => {
                console.log(data)
                xxzListener.emit('ipcRenderer',data.path)
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
