var React = require('react');
var ReactDOM = require("react-dom");


var Chart = require("../../src/index.jsx");

var Main = React.createClass({
    render(){
        "use strict";
        return (
            <div style={{display: "inline-flex", textAlign: "center"}}>
                <Chart style={{width: "700px", height: "500px", "border": "1px solid black"}}
                       columns={[
                            {type: "date", desc: "Date"},
                            {type: "number", desc: "Emails"},
                            {type: "number", desc: "Email Trend"}
                       ]}
                       rows={[
                            [new Date(2016, 0, 1), 100, 100],
                            [new Date(2016, 0, 2), 120, 120],
                            [new Date(2016, 0, 3), 130, 130],
                            [new Date(2016, 0, 4), 120, 120],
                            [new Date(2016, 0, 5), 150, 150]
                       ]}
                       options={{
                            title: "Email Activity",
                            isStacked: true,
                            hAxis: {
                              title: 'Date'
                            },
                            vAxis: {
                              title: 'Sessions'
                            },
                            colors:['#ffdf46', "#44dd55"],
                            seriesType: 'bars',
                            series: {
                                1: {
                                    type: 'area',
                                    curveType: 'function'
                                }
                            }
                       }}
                       chart="ComboChart"
                />
                <Chart style={{width: "700px", height: "500px", "border": "1px solid black"}}
                       columns={[
                            {type: "string", desc: "Type"},
                            {type: "number", desc: "Count"}
                       ]}
                       rows={[
                            ["A", 100],
                            ["B",120],
                            ["C", 130],
                            ["D", 120],
                            ["E", 150]
                       ]}
                       options={{
                            title: "Types count"
                       }}
                       chart="PieChart"
                />
            </div>
        );
    }
});

ReactDOM.render(<Main/>, document.getElementById("example"));