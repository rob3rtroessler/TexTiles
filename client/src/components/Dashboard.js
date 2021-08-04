// semantic ui
//import 'semantic-ui-css/semantic.min.css'

// bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';

// react
import React from "react";

// bootstrap?
import Tiles_HeadRowLeft from "../tiles/Tiles_HeadRowLeft";


// chart containers
import DemoConcordanceVis from "../containers/DemoConcordanceVis";

import DemoBarChart from "../containers/DemoBarChart";
import DemoPieChart from "../containers/DemoPieChart";
import DemoScatterPlot from "../containers/DemoScatterPlot";
import DemoChat from "../containers/DemoChat";

// prop types
import PropTypes from "prop-types";
const { string, object, func, arrayOf } = PropTypes;

// grid layout
import ReactGridLayout, { WidthProvider } from "react-grid-layout";
const GridLayout = WidthProvider(ReactGridLayout);
const dimensions = ["width", "height"];

// withMeasure for resizing
import withMeasure from "../hocs/withMeasure";
const MeasuredDemoConcordanceVis = withMeasure(dimensions)(DemoConcordanceVis);

const MeasuredDemoBarChart = withMeasure(dimensions)(DemoBarChart);
const MeasuredDemoScatterPlot = withMeasure(dimensions)(DemoScatterPlot);
const MeasuredDemoPieChart = withMeasure(dimensions)(DemoPieChart);
const MeasuredDemoChat = withMeasure(dimensions)(DemoChat);

// CSS
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";


class Dashboard extends React.Component {
  static defaultProps = {
    onLayoutChange: function() {},
    cols: 12
  };

  constructor(props) {
      super(props);
      this.state = {
          layout: [
              {i: 'header-left', x: 0, y: 0, w: 4, h: 1, static: true}, // logo & heading
              {i: 'header-main', x: 4, y: 0, w: 4, h: 1, static: true}, // search
              {i: 'header-right', x: 8, y: 0, w: 4, h: 1, static: true}, // handles

              // FULL
              {i: 'FL', x: 0, y: 1, w: 2, h: 10, static: true},
              {i: 'FR', x: 11, y: 1, w: 2, h: 5, static: true}, // logo & heading

              // TOP
              { i: "TL", x: 2, y: 2, w: 4, h: 5 },
              { i: "TR", x: 6, y: 2, w: 4, h: 5 },

              // BOTTOM
              { i: "BL", x: 2, y: 3, w: 3, h: 5 },
              { i: "BC", x: 5, y: 3, w: 3, h: 5 },
              { i: "BR", x: 8, y: 3, w: 4, h: 5 }]
      };
  }

  static propTypes = {
    colors: object,
    hover: arrayOf(string),
    incrementRenderCount: func,
    onLayoutChange: func
  };

  componentDidMount() {
    this.props.incrementRenderCount("component");
    window.addEventListener("resize", this.onWindowResize);
  }

  componentDidUpdate(prevProps, prevState) {
    this.props.incrementRenderCount("component");
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize);
  }

  onWindowResize = e => {
    this.forceUpdate();
  };

  onLayoutChange = layout => {
    this.props.onLayoutChange(layout);
  };

  render() {
      const { hover, colors } = this.props;
      const { layout } = this.state;
      return (
          <GridLayout
              {...this.props}
              className="dashboard"
              hover={hover}
              colors={colors}
              layout={layout}
              onLayoutChange={this.onLayoutChange}
              rowHeight={(window.innerHeight - 29) / 12}
              margin={[5, 5]}
          >
              {/*TOP*/}
              <div key="header-left" className='home-card'>
                  <Tiles_HeadRowLeft/>
              </div>
              <div key="header-main" className='home-card'>
                  center
              </div>
              <div key="header-right" className='home-card'>
                  right
              </div>

              {/*FULL*/}
              <div key="FL" className='home-card'>
                  Text
              </div>
              <div key="FR" className='home-card'>
                  Right
              </div>

              {/*TOP*/}
              <div key="TL" className='home-card'>
                  <MeasuredDemoConcordanceVis />
              </div>
              <div key="TR" className='home-card'>
                  <MeasuredDemoBarChart />
              </div>

              {/*BOTTOM*/}
              <div key="BL" style={{background:'darkgrey', borderRadius: '5px', border: 'thin solid grey'}}>
                  <MeasuredDemoPieChart />
              </div>
              <div key="BC" className='home-card'>
                  <MeasuredDemoScatterPlot />
              </div>
              <div key="BR" style={{background:'darkgrey', borderRadius: '5px', border: 'thin solid grey'}}>
                  <MeasuredDemoChat />
              </div>
          </GridLayout>
    );
  }
}

export default Dashboard;
