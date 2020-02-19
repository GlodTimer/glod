import * as React from 'react';
import { connect } from 'react-redux';
import { remote } from 'electron';

import { setIsRunning } from '../store/Timer/actions';
import Segment from './Segment';

import './styles.css';
import { app } from './styles.css';

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

  componentDidMount(): void {
    const { globalShortcut } = remote;
    globalShortcut.register('Cmd+g', this.handleClick);

    window.addEventListener('beforeunload', () => {
      remote.globalShortcut.unregisterAll();
    });
  }

  componentWillUnmount(): void {
    const { globalShortcut } = remote;

    globalShortcut.unregisterAll();
  }

  handleClick = (): void => {
    const { dispatch, isRunning } = this.props;

    dispatch(setIsRunning(!isRunning));
  };

  render(): React.ReactNode {
    return (
      <div className={app}>
        <Segment name="Stasis" />
      </div>
    );
  }
}

export default App;
