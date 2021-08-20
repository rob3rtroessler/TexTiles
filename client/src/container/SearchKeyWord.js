
const mapStateToProps = (state, ownProps) => ({
    data: getData(state),
    hover: getHover(state)
});


export default connect(mapStateToProps)(toJS(DemoBarChart));
