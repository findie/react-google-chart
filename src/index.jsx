var React = require("react");
var helper = require("./helper");

var GoogleChartWrapper = React.createClass({

    getInitialState(){
        "use strict";
        return {
            loaded: false
        }
    },

    componentWillMount(){
        "use strict";
        this.identifier = "chart" + Math.random();
    },

    componentDidMount(){
        "use strict";
        this.runScript();
    },
    componentDidUpdate(){
        "use strict";
        this.runScript();
    },

    shouldComponentUpdate(nextProps, nextState){
        "use strict";
        return !helper.deepObjectChecker(nextProps, this.props);
    },

    render(){
        "use strict";
        return (
            <div style={this.props.style} className={this.props.className}>
                <div
                    id={this.identifier}
                    style={{width:"inherit", height: "inherit"}}
                ></div>

            </div>
        )
    },

    runScript(){
        "use strict";
        var columns = this.props.columns;
        var rows = this.props.rows;
        var options = this.props.options;
        var chartType = this.props.chart;
        var identifier = this.identifier;

        if (!window.google) {
            helper.loadScript("https://www.gstatic.com/charts/loader.js", document.head, ()=> {
                return this.runScript();
            });
        } else {
            if (!window.google.visualization) {
                if (!google.charts.loadCalled) {
                    google.charts.load("current", {packages: ["corechart"]});
                    google.charts.loadCalled = true;
                }
                google.charts.setOnLoadCallback(drawChart.bind(this));
            } else {
                drawChart.call(this);
            }
        }

        function drawChart() {

            this.setState({
                loaded: true
            });

            var data = new window.google.visualization.DataTable();

            columns.forEach(function (column) {
                data.addColumn(column.type, column.desc);
            });

            data.addRows(rows);

            var chart = new window.google.visualization[chartType](document.getElementById(identifier));
            chart.draw(data, options);
        }
    }
});

module.exports = GoogleChartWrapper;