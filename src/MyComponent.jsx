// @flow
import * as React from 'react';
import { hot } from 'react-hot-loader';

type PropsType = {};

type StatesType = {
  count: number;
};

class MyComponent extends React.Component<PropsType, StatesType> {
  state = {
    count: 0,
  };

  clickHander = () => {
    const { count } = this.state;
    this.setState({ count: count * 10 });
  }

  render(): React.Node {
    const { count } = this.state;
    return (
      <React.Fragment>
        <div
          style={{
            fontSize: 200,
            textAlign: 'center',
            color: 'red',
          }}
        >
          {count}
        </div>
        <button
          type="button"
          onClick={() => this.clickHander()}
          style={{
            display: 'block',
            margin: '0 auto',
          }}
        >
          BUTTON
        </button>
      </React.Fragment>
    );
  }
}

// HOCでHMR対応
export default hot(module)(MyComponent);
