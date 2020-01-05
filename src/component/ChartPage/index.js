import React from "react";
import {Tabs, Button, Icon} from 'antd';
import {withRouter} from "react-router";
import Chart from "../Chart/index";

const {TabPane} = Tabs;


class ChartPage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props
    }
    click = () => {
        this.props.history.push("/")
    }
    dataClean = (state) => {
        let num = []
        state.forEach((data, index) => {
            data.data = this.arrClean(data.data)
        })
        return state
    }
    arrClean = (data) => {
        let arr = [], index = 0
        data.forEach((d, i) => {
            if (!arr[index]) arr[index] = []
            if (d.length > 0) {
                arr[index].push(d)
            } else if (d.length === 0 && i !== 0 && data[i - 1].length !== 0) {
                index += 1
            }
        })
        return arr
    }
    render = () => {
        let state = this.props.location.state || JSON.parse(window.localStorage['chartData']),
            dataClean = this.dataClean(state)
        return (
            <div id="chart">
                <Button onClick={this.click} type="primary">
                    <Icon type="left"/>
                    返回
                </Button>
                <Tabs defaultActiveKey="0">
                    {
                        dataClean.map((chartPage, index) => {
                            return <TabPane tab={chartPage.name} key={index}>
                                {
                                    chartPage.data.map((chartData, chartDataIndex) => {
                                        return <Chart id={chartPage.name + chartDataIndex} data={chartData}
                                                      key={chartPage.name + chartDataIndex}/>
                                    })
                                }
                            </TabPane>
                        })
                    }
                </Tabs>
            </div>
        )
    }
}

export default withRouter(ChartPage)
