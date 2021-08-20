// react
import React from "react";

// chart containers
import RobContainer from "./tiles/robContainer";
import Concordance from "./tiles/Concordance"
import TopWords from "./tiles/TopWords";


// grid layout
import ReactGridLayout, { WidthProvider } from "react-grid-layout";
const GridLayout = WidthProvider(ReactGridLayout);
const dimensions = ["width", "height"];

// withMeasure for resizing
import withMeasure from "../hocs/withMeasure";
const MeasuredRobContainer = withMeasure(dimensions)(RobContainer)
const MeasuredConcordanceContainer = withMeasure(dimensions)(Concordance)

// containers
import SearchKeyWord from "./tiles/SearchKeyWord"

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
              {i: 'FR', x: 11, y: 1, w: 2, h: 4, static: true}, // logo & heading

              // TOP
              { i: "TL", x: 2, y: 2, w: 5, h: 4 },
              { i: "TR", x: 7, y: 2, w: 3, h: 4 },

              // BOTTOM
              { i: "BL", x: 2, y: 3, w: 4, h: 6 },
              { i: "BC", x: 6, y: 3, w: 4, h: 6 },
              { i: "BR", x: 10, y: 3, w: 2, h: 6 }]
      };
  }

  componentDidMount() {
   // this.props.incrementRenderCount("component");
    window.addEventListener("resize", this.onWindowResize);
  }

  componentDidUpdate(prevProps, prevState) {
    //this.props.incrementRenderCount("component");
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize);
  }

  onWindowResize = e => {
    this.forceUpdate();
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
                  TexTiles
              </div>
              <div key="header-main" className='home-card'>
                  <SearchKeyWord/>
              </div>
              <div key="header-right" className='home-card'>
                  right
              </div>

              {/*FULL*/}
              <div key="FL" className='home-card'>
                  Text
              </div>
              <div key="FR" className='home-card'>
                  <TopWords/>
              </div>

              {/*TOP*/}
              <div key="TL" className='home-card'>
                  <MeasuredConcordanceContainer />
              </div>
              <div key="TR" className='home-card'>
                  <MeasuredRobContainer />
              </div>

              {/*BOTTOM*/}
              <div key="BL" style={{background:'darkgrey', borderRadius: '5px', border: 'thin solid grey'}}>
                  <MeasuredRobContainer />
              </div>
              <div key="BC" className='home-card'>
                  <MeasuredRobContainer />
              </div>
              <div key="BR" style={{background:'darkgrey', borderRadius: '5px', border: 'thin solid grey'}}>
                  <MeasuredRobContainer />
              </div>
          </GridLayout>
    );
  }
}

export default Dashboard;
