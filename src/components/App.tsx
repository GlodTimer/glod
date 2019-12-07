import * as React from "react";
import { connect } from "react-redux";
import { setIsRunning } from "../store/Timer/actions";
import { remote } from "electron";

interface AppProps {
  dispatch?: any;
  isRunning: boolean;
}
type ReducerType = {
  timer: any;
};

@(connect(({ timer }: ReducerType) => {
  const { isRunning } = timer;
  return {
    isRunning
  };
}) as any)
class App extends React.Component<AppProps, any> {
  static defaultProps = {
    isRunning: false
  };

  constructor(props: AppProps) {
    super(props);
  }

  componentDidMount() {
    const { globalShortcut } = remote;
    globalShortcut.register("Cmd+g", this.handleClick);

    window.addEventListener("beforeunload", () => {
      remote.globalShortcut.unregisterAll();
    });
  }

  componentWillUnmount() {
    const { globalShortcut } = remote;

    globalShortcut.unregisterAll();
  }

  handleClick = () => {
    const { dispatch, isRunning } = this.props;

    dispatch(setIsRunning(!isRunning));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Clicky</button>
        <div>{this.props.isRunning.toString()}</div>
      </div>
    );
  }
}

export default App;
