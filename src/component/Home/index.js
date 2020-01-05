import React from 'react'
import {Layout, Upload, Button, Icon} from 'antd'
import './index.css'
import {withRouter} from "react-router";
const {Header, Footer, Content} = Layout;


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.history = props.history;
        window.xxzListener.on('ipcMain', function (data) {
            this.locationChange(data)
        }.bind(this))

    }

    locationChange = (data) => this.history.push("/chart", data)

    render = () => {
        const uploadProps = {
            name: 'file',
            accept: '.xls,.xlsx',
            beforeUpload: (data) => {
                console.log(data)
                xxzListener.emit('ipcRenderer', data.path)
                return false
            }
        };
        return (
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
        )
    }
}

export default withRouter(Home);
