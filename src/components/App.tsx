import * as React from "react";
import { connect } from "react-redux";
import { setIsRunning } from "../actions/timer";

interface AppProps {
  dispatch?: any;
  isRunning: boolean;
}
type ReducerType = {
  timerReducer: any;
};

@(connect(({ timerReducer }: ReducerType) => {
  const { isRunning } = timerReducer;
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

  handleClick = () => {
    const { dispatch, isRunning } = this.props;

    dispatch(setIsRunning(!isRunning));
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.handleClick}>Clicky</button>
        <div>{this.props.isRunning.toString()}</div>
      </div>
    );
  }
}

export default App;
