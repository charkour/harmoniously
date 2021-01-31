import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { Harmony } from '.././src/index';

const App = () => {
  return (
    <div>
      <Harmony />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
