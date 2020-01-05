import React from 'react'
import {Layout, Upload, Icon} from 'antd'
import './index.css'
import {withRouter} from "react-router";

const {Dragger} = Upload;


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.history = props.history;
        window.xxzListener.on('ipcMain', function (data) {
            this.locationChange(data)
        }.bind(this))

    }

    locationChange = (data) => {
        this.history.push("/chart", data)
        // eslint-disable-next-line no-unused-expressions
        window.localStorage['chartData'] = JSON.stringify(data)
    }

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
                <Dragger {...uploadProps}>
                    <p className="ant-upload-drag-icon">
                        <Icon type="inbox"/>
                    </p>
                    <p className="ant-upload-text">请上传文件</p>
                </Dragger>
            </Layout>
        )
    }
}

export default withRouter(Home);
