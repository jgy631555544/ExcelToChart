import React from 'react'
import {Layout, Upload, Button, Icon} from 'antd'
import './index.css'
import PropTypes from "prop-types";
import {withRouter} from "react-router";
const {Header, Footer, Content} = Layout;


class Home extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        window.xxzListener.on('ipcMain', function (data) {
            console.log('收到解析的数据', data)
        })
        this.history = props.history
    }

    locationChange = () => this.history.push("/chart")

    render = () => {
        const uploadProps = {
            name: 'file',
            accept: '.xls,.xlsx',
            beforeUpload: (data) => {
                console.log(data)
                // xxzListener.emit('ipcRenderer', data.path)
                this.locationChange()
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
