/**
 * Entry point of the application
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import React from 'react';
import ReactDom from 'react-dom';

const Test = (): React.ReactElement => {
  return <h1>Hello World</h1>;
};

ReactDom.render(<Test />, document.getElementById('root'));
