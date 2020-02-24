import * as React from 'react';
import { connect } from 'react-redux';
import { remote } from 'electron';

import { setIsRunning } from '../store/Timer/actions';
import Segment from './Segment';
import TimerDisplay from './TimerDisplay';

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
        <Segment name="Stasis" endedAt="5:00" />
        <Segment name="Cryonis" endedAt="10:00" />
        <Segment name="Magnesis" endedAt="15:00" />
        <Segment name="Bombs" endedAt="20:00" />
        <Segment name="Glidy BOIIIIIII" endedAt="25:00" />
        <TimerDisplay time="25:00" />
      </div>
    );
  }
}

export default App;
