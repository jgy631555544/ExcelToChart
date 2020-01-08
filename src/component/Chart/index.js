import echarts from "echarts";
import React from "react";
import './index.css'

function Chart(props) {

    let shape = ['circle', 'emptyCircle', 'rect', 'emptyRect', 'roundRect', 'emptyRoundRect', 'triangle', 'emptyTriangle', 'diamond', 'emptyDiamond', 'pin', 'emptyPin', 'arrow', 'emptyArrow'],
        // eslint-disable-next-line no-useless-escape
        patternOnly = /(?<=\()[^\(\)]*(?=\))/,
        // eslint-disable-next-line no-useless-escape
        pattern = /(?<=\,)[^\,\)]*(?=\))/,
        data = props.data,
        allTitle = data[0][0].split('$'),
        standardLine = [],
        unit = pattern.exec(allTitle[0]) || patternOnly.exec(allTitle[0]),
        yAxis = data.filter((d, i) => {
            if (d[0] === '标准线') standardLine.push(i);
            return i !== 0 && d[0] !== '标准线'
        }).map((d, i) => d[0]),
        xAxis = data[0].filter((d, i) => i !== 0),
        markLineData = standardLine.map((i) => {
            return {
                yAxis: data[i][1],
                symbol: 'none',
                symbolSize: 0,
                lineStyle: {color: 'red'},
                label: {
                    fontSize: 17,
                    formatter: `${data[i][1]}${unit == null ? '' : unit[0]}`
                }
            }}),
        series = data.filter((d, i) => i !== 0 && d[0] !== '标准线').map((d, i) => ({
            type: 'line',
            name: yAxis[i],
            lineStyle: {width: 1},
            symbol: shape[i],
            symbolSize: 18,
            connectNulls: true,
            data: d.filter((d, i) => i !== 0),
            markLine: {
                data: markLineData
            }
        }))

    React.useEffect(() => {
        let option = {
            legend: {
                orient: 'vertical',
                right: 10,
                bottom: 70,
                textStyle: {fontSize: 20},
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
                    saveAsImage: {
                        pixelRatio: 4
                    }
                }
            },
            xAxis: {
                nameGap: 38,
                nameTextStyle: {
                    fontSize: 24
                },
                nameLocation: 'middle',
                axisLabel:{fontSize: 20},
                type: 'category',
                data: xAxis
            },
            yAxis: {
                name: allTitle[0],
                nameRotate: 90,
                nameGap: 70,
                nameTextStyle: {
                    fontSize: 24
                },
                nameLocation: 'middle',
                axisLabel:{fontSize: 20},
                min: allTitle[2],
                max: allTitle[1],
                splitLine: {
                    show: false
                },
                type: 'value',
                data: yAxis
            },
            series: series
        }
        if (allTitle.length > 3) option.xAxis.name = allTitle[3]
        echarts.init(document.getElementById(`${props.id}`)).setOption(option);
    });
    return (
        <div id={props.id} className={"chart"}></div>
    )
}

export default Chart
