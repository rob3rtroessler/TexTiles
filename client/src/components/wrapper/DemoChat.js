import React from "react";
import ChatInput from "../styled/ChatInput";


class DemoChat extends React.Component {

  state = {
    autoRefresh: false,
    refreshPeriod: 2
  };

  componentDidMount() {
    this.props.incrementRenderCount("component");
    this.props.generateText();
    //this.props.fetchData();

  }

  componentDidUpdate(prevProps, prevState) {
    this.props.incrementRenderCount("component");
  }

  handleChange = user => e => {
    this.props.updateText({ [user]: e.target.value });
  };

  render() {
    const {
      users,
      texts,
      colors,
      width,
      height,
      generateText,
      fetchData
    } = this.props;
    return (
      <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
        <div>
          {users.map((user, index) => {
            return (
              <div key={user}>
                <ChatInput
                  value={texts[index]}
                  color={colors[index]}
                  width={width / 2 - 10}
                  height={height/4}
                  onChange={this.handleChange(user)}
                />
              </div>
            );
          })}
        </div>
        <button onClick={generateText}>Generate new text</button>
        <button onClick={fetchData}>Generate new text</button>
      </div>
    );
  }
}

export default DemoChat;
