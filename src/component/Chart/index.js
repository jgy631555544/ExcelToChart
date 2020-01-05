import echarts from "echarts";
import React from "react";
import './index.css'

function Chart(props) {
    let shape = ['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'],
        data = props.data,
        yAxis = data.filter((d, i) => i !== 0).map((d, i) => d[0]),
        xAxis = data[0].filter((d, i) => i !== 0),
        series = data.filter((d, i) => i !== 0).map((d, i) => ({
            type: 'line',
            name: yAxis[i],
            lineStyle: {width: 1},
            symbol: shape[i],
            symbolSize: 13,
            data: d.filter((d, i) => i !== 0),
            markLine: {
                label: '的水平线',

                data: [
                    {
                        yAxis: 10,
                        label: {
                            formatter: 10 + '%'
                        }
                    }]
            }
        }))

    React.useEffect(() => {
        let allTitle = data[0][0].split('$$$')
        let option = {
            // title: {
            //     text: allTitle[0],
            //     top: 'middle',
            //     rotate: 90,
            // },
            legend: {
                data: yAxis.map((data) => `${data}`)
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                nameGap: 20,
                nameTextStyle: {
                    fontSize: 18
                },
                nameLocation: 'middle',
                type: 'category',
                data: xAxis
            },
            yAxis: {
                name: allTitle[0],
                nameRotate: 90,
                nameGap: 40,
                nameTextStyle: {
                    fontSize: 18
                },
                nameLocation: 'middle',
                type: 'value',
                data: yAxis
            },
            series: series
        }
        if (allTitle.length > 1) option.xAxis.name = allTitle[1]
        echarts.init(document.getElementById(`${props.id}`)).setOption(option);
    });
    return (
        <div id={props.id} className={"chart"}></div>
    )
}

export default Chart
